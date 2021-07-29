module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'monoGoogle': ['Space Mono']
            },
            spacing: {
                
                '200': '50rem',
            }


        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}