/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8B5CF6',
                    light: '#A78BFA',
                    dark: '#6D28D9',
                },
                secondary: {
                    DEFAULT: '#EC4899',
                    light: '#F472B6',
                },
                accent: '#3B82F6',
                'bg-dark': '#0A0A0F',
                'bg-card': 'rgba(20, 20, 30, 0.8)',
                'text-primary': '#FFFFFF',
                'text-secondary': '#A3A3B8',
                'text-muted': '#6B6B7B',
            },
            fontFamily: {
                primary: ['Inter', 'sans-serif'],
                display: ['"Playfair Display"', 'serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                'gradient-accent': 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
            },
            boxShadow: {
                'glow': '0 0 40px rgba(139, 92, 246, 0.3)',
                'glow-lg': '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(139, 92, 246, 0.3)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 3s ease infinite',
                'scroll': 'scroll 1.5s ease infinite',
            },
            keyframes: {
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'gradient-shift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                scroll: {
                    '0%': { opacity: '1', transform: 'translate(-50%, 0)' },
                    '100%': { opacity: '0', transform: 'translate(-50%, 15px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
