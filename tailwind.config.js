/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      fontSize: {
        xxs: '.625rem',
      },
      textColor: {
        hub: {
          primary: 'var(--color-brand-primary)',
          body: 'var(--text-color-body)',
          'btn-primary': 'var(--text-color-primary-button)',
          'btn-primary-out': 'var(--color-brand-primary)',
          'btn-see-more': 'var(--color-button-see-more)',
          'btn-interaction': 'var(--text-color-interaction-medium-button)',
          'coupon-copied': 'var(--text-color-coupon-copied)',
        },
      },
      borderColor: {
        hub: {
          'btn-primary-out': 'var(--color-brand-primary)',
          card: 'var(--border-card)',
          accordion: 'var(--border-accordion)',
          'btn-see-more': 'var(--color-button-see-more)',
          'trending-slide': 'var(--color-brand-primary)',
        },
      },
      backgroundColor: {
        hub: {
          primary: 'var(--background-page)',
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
