/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src//*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                red: "#FF0000",
                oldPrice: "#111111",
                titleColor: "#0A4874",
                navy: "#19264B",
                pink: "#FFCCFF",
                yellow: "#FCE78D",
                green: "#006600",
                blue: "#00639C",
                orange: "#FF6633",
                borderColor: "#E8E8E8",
            },
            spacing: {
                '4.5': '1.125rem',
                '18': '4.5rem',
                '30': '7.5rem',
            },
            maxWidth: {
                'product-card': '300px',
                'product-image': '250px',
            },
            height: {
                'product-image': '300px',
                'thumbnail': '50px',
            },
            borderWidth: {
                '3': '3px',
            },
            borderColor: {
                highlight: "#000",
            },
        },
    },
    plugins: [],
};