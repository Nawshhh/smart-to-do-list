export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "system-ui", "sans-serif"],
      }
    } 
  },
  variants: {
    extend: {
      backgroundColor: ['autofill'],
      textColor: ['autofill'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
