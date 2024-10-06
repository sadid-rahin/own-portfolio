/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'background-color': '#8BC6EC',
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        'skills-background' : "url('./src/assets/Image/skillls-bg.jpg')",
        'HTML' : "url('./src/assets/Image/html.png')",
        'CSS' : "url('./src/assets/Image/css.png')",
        'JAVA-SCRIPT' : "url('./src/assets/Image/js.png')",
        'REACT' : "url('./src/assets/Image/react.png')",
        'NODE-JS' : "url('./src/assets/Image/node-js.png')",
        'TAILWIND' : "url('./src/assets/Image/download.png')",
        'hero-background' : "url('./src/assets/Image/hero-bg.png')",
      },
      fontFamily: {
         'Roboto': ['Poppins", sans-serif'],
      }
    },
  },
  plugins: [],
}

