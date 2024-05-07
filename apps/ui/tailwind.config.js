/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        screens: {
            mobile: '375px',
            desktop: '1440px',
        },
        extend: {
            colors: {
                Primary: {
                    'light-red': 'hsl(0, 100%, 67%)',
                    'orangey-yellow': 'hsl(39, 100%, 56%)',
                    'green-teal': 'hsl(166, 100%, 37%)',
                    'cobalt-blue': 'hsl(234, 85%, 45%)',
                },
                Gradients: {
                    'light-slate-blue': 'hsl(252, 100%, 67%)',
                    'light-royal-blue': 'hsl(241, 81%, 54%)',
                    'violet-blue': 'hsla(256, 72%, 46%, 1)',
                    'persian-blue': 'hsla(241, 72%, 46%, 0)',
                },
                Neutral: {
                    white: 'hsl(0, 0%, 100%)',
                    'pale-blue': 'hsl(221, 100%, 96%)',
                    'light-lavender': 'hsl(241, 100%, 89%)',
                    'dark-gray-blue': 'hsl(224, 30%, 27%)',
                },
            },
            fontFamily: {
                hankenGrotesk: ['Hanken Grotesk'],
            },
            boxShadow: {
                '3xl': '20px 30px 15px -15px',
            },
            maxWidth: {
                '1/2': '50%',
            },
        },
    },
    plugins: [],
};