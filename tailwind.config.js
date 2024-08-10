/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-right": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        slideinright: 'slide-in-right 0.5s ease-in-out 0.25s 1',
      },
      colors: {
        gray: {
          "100": "#fcfcfd",
          "200": "#fbfbfc",
          "300": "#8e8e8e",
          "400": "#7d7c84",
          "500": "rgba(252, 252, 253, 0.08)",
          "600": "#fefeff",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#e9ebed",
        },
        "grayscale-300": {
          "400": "#7d7c84",
        },
        "primary-1": "#3b71fe",
        "grayscale-900": "#09080d",
        dodgerblue: "#548cff",
        mediumseagreen: {
          "100": "#58c27d",
          "200": "#58c17d",
        },
        sandybrown: "#ed9039",
        gainsboro: "#e3e3e3",
        darkslategray: {
          "100": "#3d3b40",
          "200": "#292d32",
        },
        "grayscale-400": "#5e5d65",
        lightgray: "#cfd1d4",
        white: "#fff",
        "gray-1": "#333",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "large-regular": "'General Sans'",
        "xtra-large-semibold": "Poppins",
        "body-text-small-semibold": "'Nunito Sans'",
      },
      borderRadius: {
        "71xl": "90px",
        "81xl": "100px",
        "21xl": "40px",
        "13xl": "32px",
        "61xl": "80px",
        "211xl": "230px",
        "29xl": "48px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      "5xl": "24px",
      xl: "20px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq2560: {
        raw: "screen and (max-width: 2560px)",
      },
      mq1440: {
        raw: "screen and (max-width: 1440px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq920: {
        raw: "screen and (max-width: 920px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq768: {
        raw: "screen and (max-width: 768px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq660: {
        raw: "screen and (max-width: 660px)",
      },
      mq500: {
        raw: "screen and (max-width: 500px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq414: {
        raw: "screen and (max-width: 414px)",
      },
      mq430: {
        raw: "screen and (max-width: 430px)",
      },
      mq375: {
        raw: "screen and (max-width: 375px)",
      },
      // mw1680: {
      //   raw: "screen and (min-width: 1680px)",
      // },
      // mw1440: {
      //   raw: "screen and (min-width: 1440px)",
      // },
      // mw1024: {
      //   raw: "screen and (min-width: 1024px)",
      // },
      // mw1050: {
      //   raw: "screen and (min-width: 1050px)",
      // },
      // mw1150: {
      //   raw: "screen and (min-width: 1150px)",
      // },
      // mw975: {
      //   raw: "screen and (min-width: 975px)",
      // },
      mw768: {
        raw: "screen and (min-width: 768px)",
      },
      mw750: {
        raw: "screen and (min-width: 750px)",
      },
      // mw725: {
      //   raw: "screen and (min-width: 725px)",
      // },
      // mw650: {
      //   raw: "screen and (min-width: 650px)",
      // },
      // mw450: {
      //   raw: "screen and (min-width: 450px)",
      // },
      mw375: {
        raw: "screen and (min-width: 375px)",
      },
      sm: {
        raw: "screen and (min-width: 640px)",
      },
      md: {
        raw: "screen and (min-width: 768px)",
      },
      lg: {
        raw: "screen and (min-width: 1024px)",
      },
      xl: {
        raw: "screen and (min-width: 1280px)",
      },


    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
}

