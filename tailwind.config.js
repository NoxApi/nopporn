module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main":"#00BBEA",
        "secondary":"#0C294B",
      },
      backgroundImage: {
        'head': "url('/head.png')",
        'div1': "url('/div1.jpg')",
        'div2': "url('/div2.jpg')",
        'div3': "url('/div3.jpg')",
        'div4': "url('/div4.jpg')",
        'cover1': "url('/c1.jpg')",
        'cover2': "url('/cover2.jpg')",
        'cover3': "url('/cover3.jpg')",
        'cover4': "url('/cover4.jpg')",
        'cover5': "url('/cover5.jpg')",
        'cover6': "url('/cover6.jpg')",
        'cover7': "url('/cover7.jpg')",
        'cover8': "url('/cover8.jpg')",
        'cover9': "url('/cover9.jpg')",
        'cover10': "url('/cover10.jpg')",
        'cover0': "url('/cover11.jpg')",
      },
      screens: {
        'xsm': '400px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1920px',
        // => @media (min-width: 1536px) { ... }
        '2xlm': {'max': '1440px'},
        // => @media (max-width: 1535px) { ... }
  
        'xlm': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lgm': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'mdm': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'smm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'xsmm': {'max': '374px'},
        'pr': {'max': '816px'},
      }
    },
    
  },
  plugins: [],
}