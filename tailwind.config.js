/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cyber-black': '#050505',
                'cyber-gray': '#121212',
                'cyber-glass': 'rgba(18, 18, 18, 0.6)',
                'neon-purple': '#a855f7',
                'neon-blue': '#3b82f6',
                'luxury-gold': '#fbbf24',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'cyber-gradient': 'linear-gradient(135deg, #050505 0%, #121212 100%)',
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}
