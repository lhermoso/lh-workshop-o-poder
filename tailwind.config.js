/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
                orbitron: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)',
                    dark: 'var(--primary-dark)',
                },
                secondary: 'var(--secondary)',
                text: 'var(--text)',
                background: 'var(--background)',
                'background-alt': 'var(--background-alt)',
                accent: 'var(--accent)',
                success: 'var(--success)',
                error: 'var(--error)',
                warning: 'var(--warning)',
                'crypto-gradient-start': 'var(--crypto-gradient-start)',
                'crypto-gradient-end': 'var(--crypto-gradient-end)',
            },
            backgroundImage: {
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-pattern': "url('/images/crypto-bg.jpg')",
                'crypto-grid': 'linear-gradient(rgba(0, 242, 254, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.05) 1px, transparent 1px)',
                'gradient-crypto': 'linear-gradient(135deg, var(--crypto-gradient-start) 0%, var(--crypto-gradient-end) 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            boxShadow: {
                'glow': '0 0 15px 1px rgba(0, 242, 254, 0.4)',
                'glow-lg': '0 0 30px 2px rgba(0, 242, 254, 0.5)',
                'glow-xl': '0 0 50px 5px rgba(0, 242, 254, 0.6)',
                'glow-accent': '0 0 15px 1px rgba(123, 63, 228, 0.4)',
            },
        },
    },
    plugins: [
        function ({ addBase }) {
            addBase({
                ':root': {
                    '--primary-opacity-20': 'rgba(0, 242, 254, 0.2)',
                    '--primary-opacity-10': 'rgba(0, 242, 254, 0.1)',
                    '--background-alt-opacity-70': 'rgba(23, 28, 52, 0.7)',
                }
            });
        }
    ],
} 