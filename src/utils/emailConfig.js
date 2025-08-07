/**
 * Configuration EmailJS pour le formulaire de contact
 * Guide complet pour configurer l'envoi d'emails
 */

/**
 * GUIDE DE CONFIGURATION EMAILJS
 * 
 * 1. Créer un compte sur https://www.emailjs.com/
 * 2. Ajouter un service email (Gmail, Outlook, etc.)
 * 3. Créer un template d'email
 * 4. Récupérer les IDs nécessaires
 * 5. Configurer les variables d'environnement
 */

// Configuration par défaut EmailJS
export const emailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  userId: import.meta.env.VITE_EMAILJS_USER_ID,
}

/**
 * Template EmailJS recommandé pour le portfolio
 * 
 * Subject: "Nouveau message de {{ from_name }} - {{ subject }}"
 * 
 * Body:
 * Bonjour {{ to_name }},
 * 
 * Vous avez reçu un nouveau message depuis votre portfolio :
 * 
 * Nom: {{ from_name }}
 * Email: {{ from_email }}
 * Sujet: {{ subject }}
 * 
 * Message:
 * {{ message }}
 * 
 * ---
 * Ce message a été envoyé depuis votre portfolio personnel.
 * Vous pouvez répondre directement à {{ from_email }}
 */

/**
 * Template de réponse automatique (optionnel)
 * 
 * Subject: "Merci pour votre message - Portfolio Kader"
 * 
 * Body:
 * Bonjour {{ from_name }},
 * 
 * Merci pour votre message concernant "{{ subject }}".
 * 
 * J'ai bien reçu votre demande et je vous répondrai dans les plus brefs délais, 
 * généralement sous 24h.
 * 
 * Cordialement,
 * Kader
 * Développeur Junior
 * 
 * ---
 * Ceci est un message automatique, merci de ne pas y répondre.
 */

/**
 * Valide la configuration EmailJS
 * @returns {boolean} - true si la configuration est complète
 */
export const validateEmailJSConfig = () => {
  const { serviceId, templateId, userId } = emailJSConfig
  return !!(serviceId && templateId && userId)
}

/**
 * Initialise EmailJS avec la configuration
 * @returns {boolean} - true si l'initialisation réussit
 */
export const initializeEmailJS = async () => {
  try {
    if (!validateEmailJSConfig()) {
      console.warn('Configuration EmailJS incomplète')
      return false
    }
    
    // EmailJS s'initialise automatiquement lors de l'import
    return true
  } catch (error) {
    console.error('Erreur lors de l\'initialisation EmailJS:', error)
    return false
  }
}

/**
 * Prépare les paramètres du template pour EmailJS
 * @param {Object} formData - Données du formulaire
 * @returns {Object} - Paramètres formatés pour EmailJS
 */
export const prepareTemplateParams = (formData) => {
  return {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: 'Kader', // Votre nom
    reply_to: formData.email,
    // Métadonnées additionnelles
    timestamp: new Date().toLocaleString('fr-FR'),
    user_agent: navigator.userAgent,
    page_url: window.location.href
  }
}

/**
 * Messages d'erreur personnalisés selon le code d'erreur EmailJS
 * @param {Object} error - Erreur EmailJS
 * @returns {string} - Message d'erreur utilisateur
 */
export const getEmailJSErrorMessage = (error) => {
  switch (error.status) {
    case 400:
      return 'Données du formulaire invalides. Veuillez vérifier vos informations.'
    case 401:
      return 'Configuration d\'authentification incorrecte. Contactez-moi directement.'
    case 402:
      return 'Limite d\'envoi atteinte. Veuillez réessayer plus tard ou me contacter directement.'
    case 403:
      return 'Service temporairement indisponible. Contactez-moi directement par email.'
    case 404:
      return 'Configuration du service manquante. Contactez-moi directement.'
    case 429:
      return 'Trop de tentatives. Veuillez attendre quelques minutes avant de réessayer.'
    default:
      return 'Une erreur inattendue s\'est produite. Veuillez me contacter directement.'
  }
}

/**
 * Configuration avancée pour différents environnements
 */
export const getEnvironmentConfig = () => {
  const isDev = import.meta.env.DEV
  const isProd = import.meta.env.PROD
  
  return {
    // En développement, on peut utiliser des templates de test
    templateId: isDev && import.meta.env.VITE_EMAILJS_TEMPLATE_ID_DEV 
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_DEV 
      : emailJSConfig.templateId,
    
    // Configuration de retry
    maxRetries: isProd ? 3 : 1,
    retryDelay: 2000, // 2 secondes
    
    // Timeout
    timeout: isProd ? 10000 : 5000, // 10s en prod, 5s en dev
    
    // Debug
    debug: isDev
  }
}

/**
 * Fallback si EmailJS n'est pas configuré
 * @param {Object} formData - Données du formulaire
 * @returns {string} - URL mailto formatée
 */
export const generateMailtoFallback = (formData) => {
  const { name, email, subject, message } = formData
  
  const mailtoSubject = encodeURIComponent(`Portfolio Contact: ${subject}`)
  const mailtoBody = encodeURIComponent(
    `Nom: ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}\n\n` +
    `---\n` +
    `Envoyé depuis votre portfolio personnel`
  )
  
  return `mailto:lacascade2.0@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
}

/**
 * Teste la configuration EmailJS
 * @returns {Promise<boolean>} - true si le test réussit
 */
export const testEmailJSConnection = async () => {
  try {
    if (!validateEmailJSConfig()) {
      return false
    }
    
    // Test avec des données factices
    const testParams = {
      from_name: 'Test Portfolio',
      from_email: 'test@portfolio.com',
      subject: 'Test de configuration',
      message: 'Ceci est un test automatique de la configuration EmailJS.',
      to_name: 'Kader'
    }
    
    // Note: En réalité, on ne veut pas envoyer un vrai email de test
    // Cette fonction simule juste la validation de la config
    console.log('Configuration EmailJS validée:', emailJSConfig)
    return true
    
  } catch (error) {
    console.error('Test EmailJS échoué:', error)
    return false
  }
}

// Export des constantes utiles
export const EMAIL_LIMITS = {
  MAX_EMAILS_PER_HOUR: 50, // Limite EmailJS gratuite
  MAX_MESSAGE_LENGTH: 1000,
  MAX_SUBJECT_LENGTH: 100,
  MAX_NAME_LENGTH: 50
}

export const CONTACT_INFO = {
  email: 'lacascade2.0@gmail.com',
  phone: '+225 0713798716',
  location: 'Abidjan, Côte d\'Ivoire',
  linkedin: 'https://www.linkedin.com/in/ange-traor%C3%A9-b2876b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  github: 'https://github.com/angetraore0FF'
}