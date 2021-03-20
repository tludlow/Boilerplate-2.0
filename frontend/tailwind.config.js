const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './components/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
    ],
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/ui')],
}
