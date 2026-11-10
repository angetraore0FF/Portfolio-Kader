import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

// Chargement unique du script reCAPTCHA v2 (rendu explicite).
let scriptPromise = null

const loadRecaptcha = () => {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha)

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha))
      script.onerror = () => {
        scriptPromise = null
        reject(new Error('Chargement reCAPTCHA impossible'))
      }
      document.head.appendChild(script)
    })
  }

  return scriptPromise
}

/**
 * reCAPTCHA v2 "Je ne suis pas un robot".
 * onChange(token) est appelé à la validation, onChange('') à l'expiration.
 * La vérification du token côté serveur est faite par EmailJS (clé secrète
 * à renseigner dans son tableau de bord), jamais ici.
 */
const Recaptcha = forwardRef(({ siteKey, onChange, onError }, ref) => {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const onChangeRef = useRef(onChange)
  const onErrorRef = useRef(onError)

  onChangeRef.current = onChange
  onErrorRef.current = onError

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current)
      }
    },
  }))

  useEffect(() => {
    if (!siteKey) return undefined
    let cancelled = false

    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) return
        widgetIdRef.current = grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'light',
          size: window.innerWidth < 400 ? 'compact' : 'normal',
          callback: (token) => onChangeRef.current?.(token),
          'expired-callback': () => onChangeRef.current?.(''),
          'error-callback': () => onErrorRef.current?.(),
        })
      })
      .catch(() => onErrorRef.current?.())

    return () => {
      cancelled = true
    }
  }, [siteKey])

  return <div ref={containerRef} />
})

Recaptcha.displayName = 'Recaptcha'

export default Recaptcha
