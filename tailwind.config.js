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
        'NavBG': 'rgba(22, 12, 109, 0.5)',
        'bannerOverlay' :'rgba(106, 98, 197, 0.905)',
        'serviceColor' :'rgba(25, 191, 0, 0.3)',
        'serviceHover' :'rgba(255, 255, 255, 0.3)',
        'planTable' :'rgba(236, 237, 240, 0.5)',
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