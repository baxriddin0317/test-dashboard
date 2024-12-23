/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'brand': {
  				black: {
  					DEFAULT: '#09090B'
  				},
  				gray: {
  					'100': '#E4E4E7',
  					'200': '#F4F4F5',
  					DEFAULT: '#FAFAFA'
  				}
  			}
  		},
  		borderRadius: {
  			'10': '10px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'serif'
  			],
  			inspiration: [
  				'Inspiration',
  				'serif'
  			]
  		},
  		spacing: {
  			'35': '140px',
  			'50': '200px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

