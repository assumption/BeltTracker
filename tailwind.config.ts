import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config