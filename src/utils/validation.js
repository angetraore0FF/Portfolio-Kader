/**
 * Utilitaires de validation pour le formulaire de contact
 * Validation côté client pour une meilleure UX
 */

// Regex pour validation email
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// Mots interdits (basique anti-spam)
const SPAM_WORDS = [
  'viagra', 'casino', 'lottery', 'winner', 'congratulations',
  'bitcoin', 'crypto', 'investment', 'loan', 'debt',
  'porn', 'xxx', 'sex', 'adult', 'dating', '+18'
]

/**
 * Valide un champ nom
 * @param {string} name - Le nom à valider
 * @returns {string|null} - Message d'erreur ou null si valide
 */
export const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    return 'Le nom est obligatoire'
  }
  
  if (name.trim().length < 2) {
    return 'Le nom doit contenir au moins 2 caractères'
  }
  
  if (name.trim().length > 50) {
    return 'Le nom ne peut pas dépasser 50 caractères'
  }
  
  // Vérification caractères valides (lettres, espaces, tirets, apostrophes)
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']+$/
  if (!nameRegex.test(name.trim())) {
    return 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes'
  }
  
  return null
}

/**
 * Valide un email
 * @param {string} email - L'email à valider
 * @returns {string|null} - Message d'erreur ou null si valide
 */
export const validateEmail = (email) => {
  if (!email || email.trim().length === 0) {
    return 'L\'email est obligatoire'
  }
  
  if (!EMAIL_REGEX.test(email.trim())) {
    return 'Veuillez saisir une adresse email valide'
  }
  
  if (email.length > 254) {
    return 'L\'adresse email est trop longue'
  }
  
  return null
}

/**
 * Valide un sujet
 * @param {string} subject - Le sujet à valider
 * @returns {string|null} - Message d'erreur ou null si valide
 */
export const validateSubject = (subject) => {
  if (!subject || subject.trim().length === 0) {
    return 'Le sujet est obligatoire'
  }
  
  if (subject.trim().length < 5) {
    return 'Le sujet doit contenir au moins 5 caractères'
  }
  
  if (subject.trim().length > 100) {
    return 'Le sujet ne peut pas dépasser 100 caractères'
  }
  
  return null
}

/**
 * Valide un message
 * @param {string} message - Le message à valider
 * @returns {string|null} - Message d'erreur ou null si valide
 */
export const validateMessage = (message) => {
  if (!message || message.trim().length === 0) {
    return 'Le message est obligatoire'
  }
  
  if (message.trim().length < 10) {
    return 'Le message doit contenir au moins 10 caractères'
  }
  
  if (message.trim().length > 1000) {
    return 'Le message ne peut pas dépasser 1000 caractères'
  }
  
  // Vérification basique anti-spam
  const lowerMessage = message.toLowerCase()
  const hasSpamWords = SPAM_WORDS.some(word => lowerMessage.includes(word))
  
  if (hasSpamWords) {
    return 'Votre message contient du contenu non autorisé'
  }
  
  // Vérification de répétition excessive (spam potentiel)
  const words = message.split(' ')
  const uniqueWords = new Set(words.map(word => word.toLowerCase()))
  
  if (words.length > 10 && uniqueWords.size < words.length * 0.3) {
    return 'Votre message semble contenir trop de répétitions'
  }
  
  return null
}

/**
 * Valide tout le formulaire
 * @param {Object} formData - Les données du formulaire
 * @returns {Object} - Objet contenant les erreurs par champ
 */
export const validateForm = (formData) => {
  const errors = {}
  
  // Validation de chaque champ
  const nameError = validateName(formData.name)
  if (nameError) errors.name = nameError
  
  const emailError = validateEmail(formData.email)
  if (emailError) errors.email = emailError
  
  const subjectError = validateSubject(formData.subject)
  if (subjectError) errors.subject = subjectError
  
  const messageError = validateMessage(formData.message)
  if (messageError) errors.message = messageError
  
  // Vérifications additionnelles cross-field
  
  // Vérifier si l'email et le nom ne sont pas identiques (spam potentiel)
  if (formData.email && formData.name && 
      formData.email.toLowerCase().includes(formData.name.toLowerCase().replace(/\s+/g, ''))) {
    if (formData.name.length > 10) {
      errors._form = 'Les informations saisies semblent suspectes'
    }
  }
  
  // Vérifier la cohérence entre sujet et message
  if (formData.subject && formData.message) {
    const subjectWords = formData.subject.toLowerCase().split(' ')
    const messageWords = formData.message.toLowerCase().split(' ')
    const commonWords = subjectWords.filter(word => 
      word.length > 3 && messageWords.some(msgWord => msgWord.includes(word))
    )
    
    // Si aucun mot en commun, c'est potentiellement du spam
    if (subjectWords.length > 3 && commonWords.length === 0) {
      errors._form = 'Le sujet et le message semblent incohérents'
    }
  }
  
  return errors
}

/**
 * Nettoie et formate les données du formulaire
 * @param {Object} formData - Les données brutes du formulaire
 * @returns {Object} - Les données formatées
 */
export const sanitizeFormData = (formData) => {
  return {
    name: formData.name?.trim() || '',
    email: formData.email?.trim().toLowerCase() || '',
    subject: formData.subject?.trim() || '',
    message: formData.message?.trim() || ''
  }
}

/**
 * Détection de spam basée sur des patterns
 * @param {Object} formData - Les données du formulaire
 * @returns {boolean} - true si détecté comme spam
 */
export const detectSpam = (formData) => {
  const { name, email, subject, message } = formData
  
  // Honeypot check
  if (formData.honeypot && formData.honeypot.length > 0) {
    return true
  }
  
  // Vérification de patterns de spam
  const allText = `${name} ${email} ${subject} ${message}`.toLowerCase()
  
  // Trop de liens
  const linkCount = (allText.match(/https?:\/\//g) || []).length
  if (linkCount > 2) return true
  
  // Trop de majuscules
  const uppercaseCount = (allText.match(/[A-Z]/g) || []).length
  const uppercaseRatio = uppercaseCount / allText.length
  if (uppercaseRatio > 0.3 && allText.length > 50) return true
  
  // Caractères répétés excessivement
  const repeatedChars = allText.match(/(.)\1{4,}/g)
  if (repeatedChars && repeatedChars.length > 0) return true
  
  // Email jetable basique
  const disposableEmailDomains = [
    '10minutemail', 'tempmail', 'guerrillamail', 'mailinator',
    'throwaway', 'temp-mail', 'fakeemail'
  ]
  
  const emailDomain = email.split('@')[1]?.toLowerCase()
  if (emailDomain && disposableEmailDomains.some(domain => emailDomain.includes(domain))) {
    return true
  }
  
  return false
}

/**
 * Validation en temps réel pour l'UX
 * @param {string} fieldName - Nom du champ
 * @param {string} value - Valeur du champ
 * @returns {string|null} - Message d'erreur ou null
 */
export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case 'name':
      return validateName(value)
    case 'email':
      return validateEmail(value)
    case 'subject':
      return validateSubject(value)
    case 'message':
      return validateMessage(value)
    default:
      return null
  }
}

/**
 * Génère des suggestions d'amélioration pour le formulaire
 * @param {Object} formData - Les données du formulaire
 * @returns {Array} - Liste des suggestions
 */
export const getFormSuggestions = (formData) => {
  const suggestions = []
  
  if (formData.message && formData.message.length < 50) {
    suggestions.push('Essayez de détailler davantage votre demande pour une meilleure réponse')
  }
  
  if (formData.subject && !formData.subject.includes('projet') && !formData.subject.includes('collaboration')) {
    suggestions.push('Précisez le type de projet ou collaboration dans le sujet')
  }
  
  if (formData.name && formData.name.split(' ').length === 1) {
    suggestions.push('N\'hésitez pas à inclure votre nom complet')
  }
  
  return suggestions
}