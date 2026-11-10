import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from 'emailjs-com';
import { socials } from '../data/socials';
import SectionHeader from './ui/SectionHeader';
import Recaptcha from './ui/Recaptcha';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'lacascade2.0@gmail.com', href: 'mailto:lacascade2.0@gmail.com', description: 'Réponse sous 24h' },
  { icon: Phone, title: 'Téléphone', value: '+225 0713798716', href: 'tel:+2250713798716', description: 'Lun-Ven 9h-18h' },
  { icon: MapPin, title: 'Localisation', value: 'Paris, France', href: null, description: 'Disponible en remote' },
];

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [submitState, setSubmitState] = useState({
    status: null,
    message: '',
    isLoading: false,
  });

  const [captchaToken, setCaptchaToken] = useState('');
  const formRef = useRef();
  const recaptchaRef = useRef();

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaToken('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.honeypot) return;
    if (!formValues.name || !formValues.email || !formValues.subject || !formValues.message) {
      setSubmitState({ status: 'error', message: 'Tous les champs sont requis.', isLoading: false });
      return;
    }

    if (!RECAPTCHA_SITE_KEY) {
      setSubmitState({ status: 'error', message: "Vérification anti-spam indisponible. Écrivez-moi par email.", isLoading: false });
      return;
    }
    if (!captchaToken) {
      setSubmitState({ status: 'error', message: 'Veuillez valider le reCAPTCHA.', isLoading: false });
      return;
    }

    setSubmitState({ status: null, message: '', isLoading: true });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      await emailjs.send(serviceId, templateId, {
        from_name: formValues.name,
        from_email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
        reply_to: formValues.email,
        'g-recaptcha-response': captchaToken,
      }, userId);

      resetCaptcha();
      setSubmitState({ status: 'success', message: 'Message envoyé avec succès !', isLoading: false });

      setTimeout(() => {
        setFormValues({ name: '', email: '', subject: '', message: '', honeypot: '' });
        setSubmitState({ status: null, message: '', isLoading: false });
      }, 2000);
    } catch (error) {
      resetCaptcha();
      setSubmitState({ status: 'error', message: "Erreur lors de l'envoi.", isLoading: false });
    }
  };

  const fields = [
    { name: 'name', label: 'Nom complet', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Adresse email', type: 'email', autoComplete: 'email' },
    { name: 'subject', label: 'Sujet', type: 'text', autoComplete: 'off' },
  ];

  return (
    <section id="contact" className="section-y scroll-mt-16 border-t border-line bg-canvas">
      <div className="container-page space-y-16">
        <SectionHeader
          index="04"
          label="Contact"
          title="Échangeons"
          intro="Un projet, une opportunité ou simplement une question : écrivez-moi."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Coordonnées */}
          <div className="space-y-8 lg:col-span-5">
            <ul className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.title} className="card flex items-start gap-4 p-5">
                    <Icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <p className="label text-ink/60">[ {info.title} ]</p>
                      {info.href ? (
                        <a href={info.href} className="mt-1 block font-medium text-accent hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium text-ink">{info.value}</p>
                      )}
                      <p className="mt-1 text-sm text-ink/60">{info.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="space-y-3">
              <p className="label text-ink/60">[ Réseaux ]</p>
              <ul className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        className="flex size-11 items-center justify-center rounded border border-line bg-surface text-accent transition-colors duration-200 hover:border-accent"
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="card space-y-5 p-6 hover:border-line md:p-8 lg:col-span-7"
          >
            <p className="label text-accent">[ Envoyer un message ]</p>

            <div className="hidden">
              <input type="text" name="honeypot" value={formValues.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />
            </div>

            {fields.map((f) => (
              <div key={f.name} className="space-y-2">
                <label htmlFor={`contact-${f.name}`} className="label block text-ink/70">
                  {f.label}
                </label>
                <input
                  id={`contact-${f.name}`}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  value={formValues[f.name]}
                  onChange={handleChange}
                  required
                  className="field"
                />
              </div>
            ))}

            <div className="space-y-2">
              <label htmlFor="contact-message" className="label block text-ink/70">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                rows={5}
                required
                className="field min-h-[120px] resize-y"
              />
            </div>

            <div className="space-y-2">
              <p className="label text-ink/70">Vérification anti-spam</p>
              {RECAPTCHA_SITE_KEY ? (
                <Recaptcha
                  ref={recaptchaRef}
                  siteKey={RECAPTCHA_SITE_KEY}
                  onChange={setCaptchaToken}
                  onError={() =>
                    setSubmitState({ status: 'error', message: 'Le reCAPTCHA n’a pas pu se charger. Rechargez la page.', isLoading: false })
                  }
                />
              ) : (
                <p className="text-sm text-danger">reCAPTCHA non configuré (VITE_RECAPTCHA_SITE_KEY manquante).</p>
              )}
            </div>

            {submitState.status && (
              <div
                role="status"
                className={`flex items-center gap-3 rounded border p-4 text-sm ${
                  submitState.status === 'success'
                    ? 'border-accent text-accent'
                    : 'border-danger text-danger'
                }`}
              >
                {submitState.status === 'success' ? (
                  <CheckCircle size={18} strokeWidth={1.5} />
                ) : (
                  <AlertCircle size={18} strokeWidth={1.5} />
                )}
                <span>{submitState.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitState.isLoading}
              className="btn-solid w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState.isLoading ? (
                <>
                  <Loader size={16} strokeWidth={1.5} className="animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Send size={16} strokeWidth={1.5} />
                  <span>Envoyer le message</span>
                </>
              )}
            </button>

            <p className="text-center text-xs text-ink/60">
              Vos données sont utilisées uniquement pour vous répondre.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
