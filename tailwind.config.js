/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'nunito': ['"Nunito"', 'sans-serif'],
    },
    
    colors: {
      transparent: 'transparent',
      'blue': '#3294F8',
      'base-title': '#E7EDF4',
      'base-subtitle': '#C4D4E3',
      'base-text': '#AFC2D4',
      'base-span': '#7B96B2',
      'base-label': '#3A536B',
      'base-border': '#1C2F41',
      'base-post': '#112131',
      'base-profile': '#0B1B2B',
      'base-background': '#071422',
      'base-input': '#040F1A',
      'link-active': '#9747FF',
    },
    extend: {
    },
  },
  plugins: [],
}

