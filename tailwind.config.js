/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ibm: ["IBM Plex Mono", "monospace", "sans-serif"],
                play: ["Play", "sans-serif"],
            },
        },
    },
    plugins: [],
};
