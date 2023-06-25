/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "url('/assets/images/background/home-hero.png')",
        'home-circle': "url('/assets/images/background/circle.png')",
        'title-line': "url('/assets/images/title/title-line.png')",
        'cta': "url('/assets/images/footer/CTA.png')",
        "login": "url('/assets/images/background/login-image.png')",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        grey: "#A7A7A7",
        "grey-rgba": "rgba(217, 217, 217, 0.13)",
        "input-grey-rgba": "rgba(255, 255, 255, 0.12)",
        "subscribe-rgba": "rgba(200, 203, 222, 0.53)",
        "learnmore-gray": "rgba(241,241,241,1)",
        custom1: "rgba(248, 248, 248, 0.34)",
        custom2: "rgba(250, 250, 250, 1)",
        primary: {
          orange: "#FF6B00",
          green: "#1ACE0A",
          gray: " #646464",
          greenTwo: "#08AC04",
          blue: "#0F2A6F",
          grey: "#CCCCCC",
          lightGrey: "#F8F8FA",
          red: "#FF0000",
          lightGreen: "#1ACE0A0A",
          lightGreenNoOpacity: "#E4FFE1",
          lightGreenNoOpacity2: "#E4FFE1",
        },
        secondary: {
          orange: "#F3C6A6",
          green: "#084C04",
          blue: "#0F216F",
          grey: "#FAFAFF"
        }
      }
    },
  },
  plugins: [],
}
