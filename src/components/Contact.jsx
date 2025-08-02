import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import emailjs from 'emailjs-com'
import { validateForm } from '../utils/validation'
import { socials } from '../data/socials'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Champ anti-spam invisible
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('')
  
  const formRef = useRef()

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kader@example.com",
      href: "mailto:kader@example.com",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 12 34 56 78",
      href: "tel:+33612345678",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
      href: "#",
      description: "Disponible en remote"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Nettoyer les erreurs lors de la saisie
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Vérification anti-spam (honeypot)
    if (formData.honeypot) {
      console.log('Spam détecté via honeypot')
      return
    }
    
    // Validation du formulaire
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Configuration EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const userId = import.meta.env.VITE_EMAILJS_USER_ID
      
      if (!serviceId || !templateId || !userId) {
        throw new Error('Configuration EmailJS manquante')
      }
      
      // Préparation des données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kader',
        reply_to: formData.email
      }
      
      // Envoi de l'email
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      )
      
      if (response.status === 200) {
        setSubmitStatus('success')
        setSubmitMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.')
        
        // Reset du formulaire
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: ''
        })
        setErrors({})
      }
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
      
      if (error.message === 'Configuration EmailJS manquante') {
        setSubmitMessage('Configuration manquante. Veuillez contacter directement par email.')
      } else {
        setSubmitMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou me contacter directement.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const InputField = ({ name, type = 'text', placeholder, label, required = false, as = 'input' }) => {
    const Component = as
    const isTextarea = as === 'textarea'
    
    return (
      <motion.div variants={itemVariants} className="space-y-2">
        <label 
          htmlFor={name}
          className="block text-text-light font-medium text-sm"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
        
        <Component
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleInputChange}
          required={required}
          className={`w-full px-4 py-3 bg-primary-medium border rounded-lg text-text-light placeholder-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent-mint focus:border-transparent transition-all duration-300 ${
            errors[name] 
              ? 'border-red-400 focus:ring-red-400' 
              : 'border-primary-light hover:border-accent-mint/50'
          } ${isTextarea ? 'resize-none h-32' : ''}`}
          {...(isTextarea && { rows: 5 })}
        />
        
        {errors[name] && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-red-400 text-sm flex items-center space-x-1"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors[name]}</span>
          </motion.p>
        )}
      </motion.div>
    )
  }

  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light">
              Contactez-<span className="text-gradient">moi</span>
            </h2>
            <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
              Vous avez un projet en tête ou souhaitez simplement échanger ? 
              N'hésitez pas à me contacter, je serai ravi de discuter avec vous !
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-light mb-6">
                  Restons en contact
                </h3>
                
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-4 bg-primary-medium/30 rounded-lg border border-primary-light/10 hover:border-accent-mint/30 transition-all duration-300"
                    >
                      <div className="p-3 bg-accent-mint/20 rounded-lg">
                        <Icon className="w-6 h-6 text-accent-mint" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-light mb-1">
                          {info.title}
                        </h4>
                        <a 
                          href={info.href}
                          className="text-accent-mint hover:underline font-medium"
                        >
                          {info.value}
                        </a>
                        <p className="text-text-light/70 text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Réseaux sociaux */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-xl font-semibold text-text-light">
                  Suivez-moi aussi sur
                </h4>
                <div className="flex space-x-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-primary-medium hover:bg-accent-mint hover:text-primary-dark transition-all duration-300 rounded-lg group"
                        title={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>

              {/* Disponibilité */}
              <motion.div 
                variants={itemVariants}
                className="bg-primary-medium/50 p-6 rounded-lg border border-primary-light/20"
              >
                <h4 className="text-lg font-semibold text-text-light mb-3">
                  🚀 Disponibilité
                </h4>
                <p className="text-text-light/80 text-sm leading-relaxed">
                  Actuellement <span className="text-green-400 font-medium">disponible</span> pour 
                  de nouveaux projets et opportunités. Je réponds généralement dans les 24h.
                </p>
              </motion.div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div variants={itemVariants}>
              <form 
                ref={formRef} 
                onSubmit={handleSubmit}
                className="space-y-6 bg-primary-medium/30 p-8 rounded-lg border border-primary-light/20"
                noValidate
              >
                <h3 className="text-2xl font-bold text-text-light mb-6">
                  Envoyez-moi un message
                </h3>

                {/* Champ honeypot anti-spam (invisible) */}
                <div className="hidden">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    name="name"
                    label="Nom complet"
                    placeholder="Votre nom"
                    required
                  />
                  
                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <InputField
                  name="subject"
                  label="Sujet"
                  placeholder="Objet de votre message"
                  required
                />

                <InputField
                  name="message"
                  label="Message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  required
                  as="textarea"
                />

                {/* Status de soumission */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`p-4 rounded-lg border flex items-center space-x-3 ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 border-green-500/30 text-green-400'
                        : 'bg-red-500/20 border-red-500/30 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm">{submitMessage}</span>
                  </motion.div>
                )}

                {/* Bouton de soumission */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-primary-light cursor-not-allowed'
                      : 'bg-accent-mint hover:bg-accent-mint/90 text-primary-dark'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>

                {/* Note de confidentialité */}
                <p className="text-text-light/60 text-xs text-center">
                  En envoyant ce formulaire, vous acceptez que vos données soient utilisées 
                  uniquement pour vous répondre. Aucune donnée n'est partagée avec des tiers.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Call to action supplémentaire */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-primary-medium/30 p-8 rounded-lg border border-primary-light/20"
          >
            <h3 className="text-2xl font-bold text-text-light mb-4">
              Prêt à démarrer votre projet ? 🚀
            </h3>
            <p className="text-text-light/70 mb-6 max-w-2xl mx-auto">
              Que ce soit pour un site web, une application ou simplement pour échanger 
              sur les technologies, je serais ravi de collaborer avec vous !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:kader@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email direct</span>
              </motion.a>
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <span>Voir mes projets</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact