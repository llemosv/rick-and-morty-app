/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        auth: "400% 400%",
      },
      keyframes: {
        gradient_background: {
          "0%": { "background-position": "0 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0 50%" },
        },
      },
      animation: {
        gradient_background: "gradient_background 5s ease-in-out infinite",
      },
      boxShadow: {
        auth_shadow:
          "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)",
        card_shadow:
          "box-shadow:box-shadow:0px 0px 1.9px rgba(0, 0, 0, 0.024),0px 0px 5.1px rgba(0, 0, 0, 0.035),0px 0px 12.4px rgba(0, 0, 0, 0.046),0px 0px 41px rgba(0, 0, 0, 0.07)",
        shadow_moon_light: "inset -0.5em -0.5em #0c4565",
        shadow_moon_dark: "inset -0.5em -0.5em #ffcb05",
        shadow_sun_light: "inset -0.7em -0.7em #0c4565",
        shadow_sun_dark: "inset -0.7em -0.7em #ffcb05",
      },
      colors: {
        rickLight: {
          50: "#F4F9FF",
          100: "#D2E3FD",
          200: "#C9DEFD",
          300: "#A4C8FF",
          400: "#60A0FF",
          500: "#1C78FF",
          600: "#1E65FF",
          700: "#114AA4",
          800: "#0D376B",
          900: "#092642",
        },
        rickDark: {
          50: "#202733",
          100: "#1B2230",
          200: "#161B27",
          300: "#11161E",
          400: "#0C1115",
          500: "#070C0C",
          600: "#020607",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        mortyLight: {
          50: "#E7FAF0",
          100: "#C2EACD",
          200: "#B8E5C5",
          300: "#8CCE9D",
          400: "#5EB277",
          500: "#31A651",
          600: "#2D944D",
          700: "#1F6333",
          800: "#174D27",
          900: "#11351C",
        },
        mortyDark: {
          50: "#141F1A",
          100: "#101B16",
          200: "#0C1712",
          300: "#08130E",
          400: "#040F0A",
          500: "#000B06",
          600: "#000702",
          700: "#000300",
          800: "#000000",
          900: "#000000",
        },
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(250px, 1fr))",
        routes: "repeat(auto-fit, minmax(700px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
