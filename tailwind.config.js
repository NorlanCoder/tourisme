/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/img/kerala-165347_1280.jpg')",
        'img1-pattern' : "url('/src/assets/img/fishermans-hut-4478427_1280.jpg')",
        'img2-pattern' : "url('/src/assets/img/little-boom-7362108_1280.jpg')",
        'img3-pattern' : "url('/src/assets/img/beach-4455433_1280.jpg')",
        'gallery-img1' : "url('/src/assets/img/houseboat-2031055_1280.jpg')",
        'gallery-img2' : "url('/src/assets/img/houseboat-1648529_1280.jpg')",
        'gallery-img3' : "url('/src/assets/img/hut-7032759_1280.jpg')",
        'gallery-img4' : "url('/src/assets/img/angel-8888879_1280.jpg')",
        'gallery-img5' : "url('/src/assets/img/beach-814679_1280.jpg')",
        'gallery-img6' : "url('/src/assets/img/couple-2447450_1280.jpg')",
        'footer-top-bg' : "url('/src/assets/img/Shape1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },

      translate: {
        'mobile': 'calc(var(--current-index) * -100%)',  
        'sm': 'calc(var(--current-index) * -50%)',
        'md': 'calc(var(--current-index) * -33.33%)',
      },

      colors: {
        terre: '#AD5526',
        terre2: '#F2D971',
        terre3: '#9B2121',
        mygray: '#3D405B',
      }
    },
  },
  plugins: [],
}

