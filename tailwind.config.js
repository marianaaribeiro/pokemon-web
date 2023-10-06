/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      backgroundColor: {
        hub: {
          primary: 'var(--background-pages)',
          'page-secundary': 'var(--background-pages-secundary)',
          'page-third': 'var(--background-pages-third)',
          'page-nulo': 'var(--background-pages-nulo)',
          'page-alert': 'var( --background-pages-alert)',
          'btn-primary': 'var(--color-brand-primary)',
          'btn-interaction': 'var(--color-interaction-medium)',
          card: 'var(--background-card)',
          'carousel-dot': 'var(--background-carousel-dot)',
          'carousel-dot-selected': 'var(--color-brand-primary)',
          'campaign-links-sep': 'var(--background-campaign-links-sep)',
          'campaign-links': 'var(--background-campaign-links)',
          'coupon-copied': 'var(--background-coupon-copied)',
        },
      },
      textColor: {
        hub: {
          primary: 'var(--text-color)',
          body: 'var(--text-color-body)',
          'btn-primary': 'var(--text-color-primary-button)',
          'btn-primary-out': 'var(--color-brand-primary)',
          'btn-see-more': 'var(--color-button-see-more)',
          'btn-interaction': 'var(--text-color-interaction-medium-button)',
          'coupon-copied': 'var(--text-color-coupon-copied)',
        },
      },
      boxShadowColor: {
        hub: {
          primary: 'var(--box-shadow-color)',
        },
      },
      fontSize: {
        xxs: '.625rem',
      },

      borderColor: {
        hub: {
          'page-nulo': 'var(--background-pages-nulo)',
          'btn-primary-out': 'var(--color-brand-primary)',
          card: 'var(--border-card)',
          accordion: 'var(--border-accordion)',
          'btn-see-more': 'var(--color-button-see-more)',
          'trending-slide': 'var(--color-brand-primary)',
        },
      },

      fill: {
        hub: {
          spinner: 'var(--color-brand-primary)',
          primary: 'var(--color-brand-primary)',
          body: 'var(--text-color-body)',
        },
      },
      stroke: {
        hub: {
          primary: 'var(--color-brand-primary)',
        },
      },
    },
  },
  plugins: [],
}
