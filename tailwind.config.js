/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           'cnbd-red': '#E30613',
           'cnbd-black': '#000000',
           'cnbd-white': '#FFFFFF',
         },
         animation: {
           'fade-in': 'fadeIn 0.5s ease-in-out forwards',
           'slide-down': 'slideDown 0.5s ease-in-out',
           'slide-up': 'slideUp 0.3s ease-in-out',
           'pulse-soft': 'pulseSoft 2s infinite',
           'float': 'float 3s ease-in-out infinite',
           'bounce-gentle': 'bounceGentle 2s infinite',
           'spin-slow': 'spin 4s linear infinite',
           'gradient-shift': 'gradientShift 8s ease infinite',
           'scale-in-out': 'scaleInOut 2s ease-in-out infinite',
         },
         backgroundSize: {
           '200%': '200% 200%',
         },
         keyframes: {
           fadeIn: {
             '0%': { opacity: '0' },
             '100%': { opacity: '1' },
           },
           slideDown: {
             '0%': { transform: 'translateY(-10px)', opacity: '0' },
             '100%': { transform: 'translateY(0)', opacity: '1' },
           },
           slideUp: {
             '0%': { transform: 'translateY(10px)', opacity: '0' },
             '100%': { transform: 'translateY(0)', opacity: '1' },
           },
           pulseSoft: {
             '0%, 100%': { opacity: '1' },
             '50%': { opacity: '0.7' },
           },
           float: {
             '0%, 100%': { transform: 'translateY(0)' },
             '50%': { transform: 'translateY(-5px)' },
           },
           bounceGentle: {
             '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
             '50%': { transform: 'translateY(-3px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
           },
           gradientShift: {
             '0%': { backgroundPosition: '0% 50%' },
             '50%': { backgroundPosition: '100% 50%' },
             '100%': { backgroundPosition: '0% 50%' },
           },
           scaleInOut: {
             '0%, 100%': { transform: 'scale(1)' },
             '50%': { transform: 'scale(1.05)' },
           },
         },
         transitionDuration: {
           '400': '400ms',
           '2000': '2000ms',
         },
         transitionTimingFunction: {
           'bounce': 'cubic-bezier(0.8, 0, 0.2, 1)',
           'elastic': 'cubic-bezier(0.5, 0, 0.25, 1.75)',
         },
         boxShadow: {
           'depth': '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
           'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
           'inner-soft': 'inset 0 1px 2px rgba(0, 0, 0, 0.06)',
         },
         backdropBlur: {
           'xs': '2px',
         },
       },
     },
     plugins: [
       // Custom scrollbar plugin
       function({ addUtilities }) {
         const newUtilities = {
           '.scrollbar-thin': {
             scrollbarWidth: 'thin',
             '&::-webkit-scrollbar': {
               width: '6px',
               height: '6px',
             },
           },
           '.scrollbar-thumb-cnbd-red-20': {
             '&::-webkit-scrollbar-thumb': {
               backgroundColor: 'rgba(227, 6, 19, 0.2)',
               borderRadius: '3px',
             },
             '&::-webkit-scrollbar-thumb:hover': {
               backgroundColor: 'rgba(227, 6, 19, 0.4)',
             },
           },
           '.scrollbar-track-gray-100': {
             '&::-webkit-scrollbar-track': {
               backgroundColor: '#f1f1f1',
               borderRadius: '3px',
             },
           },
           '.fill-mode-forwards': {
             animationFillMode: 'forwards',
           },
         };
         addUtilities(newUtilities, ['responsive', 'hover']);
       },
     ],
   }
   