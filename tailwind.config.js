/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], theme: { extend: {
      fontFamily: {
        merriweather: ['"Merriweather"', 'serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        brandBlue: '#1C3D5A',
      },
    },
  }, plugins: [] }
