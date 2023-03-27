/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3bdb63",

          secondary: "#3c3293",

          accent: "#c1ae03",

          neutral: "#1E1F2E",

          "base-100": "#F4F5F6",

          info: "#3BBDDE",

          success: "#19804D",

          warning: "#C27114",

          error: "#ED2651",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
