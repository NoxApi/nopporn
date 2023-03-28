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
        "main":"#00BBEA"
      },
      backgroundImage: {
        'div1': "url('/div1.png')",
        'div2': "url('/div2.png')",
      }
    },
    
  },
  plugins: [],
}