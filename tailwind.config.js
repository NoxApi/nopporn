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
        'div1': "url('/div1.png')",
        'div2': "url('/div2.png')",
        'cover1': "url('/c1.jpg')",
      }
    },
    
  },
  plugins: [],
}