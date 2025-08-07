import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from 'emailjs-com';
import { socials } from '../data/socials';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [submitState, setSubmitState] = useState({
    status: null,
    message: '',
    isLoading: false
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.honeypot) return;
    if (!formValues.name || !formValues.email || !formValues.subject || !formValues.message) {
      setSubmitState({ status: 'error', message: 'Tous les champs sont requis.', isLoading: false });
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
        reply_to: formValues.email
      }, userId);

      setSubmitState({ status: 'success', message: 'Message envoyé avec succès !', isLoading: false });

      setTimeout(() => {
        setFormValues({ name: '', email: '', subject: '', message: '', honeypot: '' });
        setSubmitState({ status: null, message: '', isLoading: false });
      }, 2000);
    } catch (error) {
      setSubmitState({ status: 'error', message: "Erreur lors de l'envoi.", isLoading: false });
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "lacascade2.0@gmail.com", href: "mailto:lacascade2.0@gmail.com", description: "Réponse sous 24h" },
    { icon: Phone, title: "Téléphone", value: "+225 0713798716", href: "tel:+2250713798716", description: "Lun-Ven 9h-18h" },
    { icon: MapPin, title: "Localisation", value: "Côte d'Ivoire, Abidjan", href: "#", description: "Disponible en remote" }
  ];

  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="container-max">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light">
              Contactez-<span className="text-gradient">moi</span>
            </h2>
            <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
              Vous avez un projet en tête ou souhaitez simplement échanger ? N'hésitez pas à me contacter !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-light mb-6">Restons en contact</h3>
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-4 p-4 bg-primary-medium/30 rounded-lg border border-primary-light/10">
                      <div className="p-3 bg-accent-mint/20 rounded-lg">
                        <Icon className="w-6 h-6 text-accent-mint" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-light mb-1">{info.title}</h4>
                        <a href={info.href} className="text-accent-mint hover:underline font-medium">{info.value}</a>
                        <p className="text-text-light/70 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-text-light">Suivez-moi aussi sur</h4>
                <div className="flex space-x-4">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-medium hover:bg-accent-mint hover:text-primary-dark rounded-lg transition-colors duration-300" title={social.name}>
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-primary-medium/30 p-8 rounded-lg border border-primary-light/20">
                <h3 className="text-2xl font-bold text-text-light mb-6">Envoyez-moi un message</h3>

                <div className="hidden">
                  <input type="text" name="honeypot" value={formValues.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />
                </div>

                <input
                  name="name"
                  type="text"
                  placeholder="Nom complet"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-medium text-text-light border border-primary-light rounded-lg caret-white"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Adresse email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-medium text-text-light border border-primary-light rounded-lg caret-white"
                />

                <input
                  name="subject"
                  type="text"
                  placeholder="Sujet"
                  value={formValues.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-medium text-text-light border border-primary-light rounded-lg caret-white"
                />

                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-primary-medium text-text-light border border-primary-light rounded-lg resize-y min-h-[120px] caret-white"
                />

                {submitState.status && (
                  <div className={`p-4 rounded-lg border flex items-center space-x-3 ${submitState.status === 'success' ? 'bg-green-500/20 border-green-500/30 text-green-400' : 'bg-red-500/20 border-red-500/30 text-red-400'}`}>
                    {submitState.status === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <span className="text-sm">{submitState.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitState.isLoading}
                  className={`w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-lg font-medium transition-colors duration-300 ${submitState.isLoading ? 'bg-primary-light cursor-not-allowed' : 'bg-accent-mint hover:bg-accent-mint/90 text-primary-dark'}`}
                >
                  {submitState.isLoading ? (
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
                </button>

                <p className="text-text-light/60 text-xs text-center">Vos données sont utilisées uniquement pour vous répondre.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
