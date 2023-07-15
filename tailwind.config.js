/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#6366f1",
                    secondary: "#80b2d6",
                    accent: "#157ebf",
                    neutral: "#262626",
                    "base-100": "#171717",
                    info: "#83bef1",
                    success: "#56e1ae",
                    warning: "#edbf07",
                    error: "#e65237",
                },
            },
        ],
        prefix: "daisy-",
    },
};
