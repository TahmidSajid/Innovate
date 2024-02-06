/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ******** width **********
      spacing: {
        'container': '1170px',
      },
      // ******** color **********
      colors: {
        'hoverColor': '#1BBF00',
        'NavBG': 'rgba(22, 12, 109, 0.5);',
        'bannerOverlay' :'rgba(106, 98, 197, 0.905);',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'paprika': ['Paprika', 'system-ui'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
    },
    backgroundImage: {
      'banner-bg': "url('./assets/images/banner_bg.png')",
    }
  },
  plugins: [],
  }
}