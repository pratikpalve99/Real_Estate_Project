/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
      btn:"box-shadow: 0px 10px 15px 0px #01739933",

      },

      fontSize: {
        sm: '12px',
        base: '14px',
        md:'16px',
        lg:'20px',
        xl: '24px',
        '2xl': '28px',
        '3xl':'36px',
        '4xl':'48px',
        '5xl' : "64px"
        },

        colors:{

          blue:{
            dark:"#0A72AD",
          },
          gray:{
            dark:"#C4C4C4",
            light:"#E5E5E5",
          },
          black:{
            light:"#242527",
            dark:"#2B2B2B",
          }
        }
    },
  },
  plugins: [],
}

