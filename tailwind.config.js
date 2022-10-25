module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        default: "'Noto Sans', sans-serif"
      },
      boxShadow:{
        normal: "0px 30px 60px rgba(59, 130, 246, 0.25)"
      },
      dropShadow:{
        custom: "0px 30px 60px rgba(59, 130, 246, 0.25)",
      },
      background: {
        gradienColor: "linear-gradient(42.43deg, #C6DBFF 0%, #E1EBFA 52.25%);"
      },
      backgroundImage: {
        aboutHeader: "url(/about/head.svg)",
        projectheader: "url(/projects/headerbg.svg)",
        headGradient: "url(/about/headGradient.svg)",
        contentBg: "url(/team/contentbg.svg)",
        main: "url(/main.svg)"
      },
      spacing: {
        'layout': '2rem 7.438rem',
      }   
    },
  },
  plugins: [],
}
