/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAF9F6", // kırık beyaz
                navy: "#0A1A2F",       // lacivert
                accent: "#D67C45",     // mat kiremit / toprak turuncusu
            },
        },
    },
    plugins: [],
};
