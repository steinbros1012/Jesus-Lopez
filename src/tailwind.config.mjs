/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '0.97', letterSpacing: '-0.04em', fontWeight: '800' }],
                '8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '0.93', letterSpacing: '-0.04em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "cormorantgaramond",
                paragraph: "sora"
            },
            colors: {
                // Deep forest green — brand primary
                primary: '#1B3A2D',
                'primary-light': '#234D3B',
                'primary-foreground': '#FFFFFF',
                // Warm amber — the action accent
                'accent-gold': '#C8922A',
                // Page background — clean white
                background: '#FFFFFF',
                // Rich charcoal with a slight green tint
                foreground: '#141C14',
                // Muted green-slate for secondary text
                secondary: '#5A6B62',
                'secondary-foreground': '#FFFFFF',
                // Light section background — soft green-tinted white
                muted: '#F3F6F4',
                'muted-foreground': '#5A6B62',
                // Warm cream for alternating sections
                cream: '#FAF7F2',
                destructive: '#dc3545',
                'destructive-foreground': '#ffffff',
            },
            transitionDuration: {
                '400': '400ms',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
