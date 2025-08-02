/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Palette de couleurs du portfolio
        primary: {
          dark: '#0B162C',    // Bleu nuit - Fond principal
          medium: '#1C2942',  // Bleu foncé - Sections secondaires
          light: '#3B556D',   // Bleu/gris - UI (boutons, liens)
        },
        accent: {
          mint: '#5FC2BA',    // Vert menthe - Accent
        },
        text: {
          light: '#FBFBFB',   // Blanc cassé - Texte clair
          dark: '#0B162C',    // Bleu nuit - Texte sombre
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}