/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
        flowbite.content(),
    ],
    theme: {
        extend: {},
        colors: {
            'primary': '#1f2937',
        }
    },
    plugins: [
        flowbite.plugin(),
    ],
}