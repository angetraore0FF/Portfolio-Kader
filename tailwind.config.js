/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f8f9fa',   // --bg : fond principal
        primary: '#003049',  // --primary : header, hero, footer, grands titres
        accent: '#003566',   // --accent : boutons, liens, bordures actives (fond clair uniquement)
        ink: '#1a1f24',      // texte courant
        surface: '#ffffff',  // fond des cartes
        line: '#dde2e7',     // bordures
        danger: '#b42318',   // erreurs de formulaire uniquement
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
