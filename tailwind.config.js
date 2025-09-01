/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
        'primary': ['Public Sans', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
        'display': ['Public Sans', 'sans-serif'],
        'body': ['Public Sans', 'sans-serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Tamanhos semânticos para o negócio
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'title': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '500' }]
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900'
      },
      colors: {
        // Cores principais da marca
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#00DC82',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22'
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Laranja vibrante - destaque e energia
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407'
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Verde - sucesso e confiabilidade
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Laranja - atenção e manutenção
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Vermelho - urgência e problemas
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a'
        },
        // Cores neutras personalizadas
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        },
        // Cores específicas do negócio
        industrial: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Cinza industrial
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        clean: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Verde água - limpeza e higiene
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a'
        },
        // Preto e branco padrão
        black: '#000000',
        white: '#ffffff'
      },
      // Gradientes personalizados
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #020617 0%, #1e293b 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00DC82 0%, #059669 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-success': 'linear-gradient(135deg, #00DC82 0%, #059669 100%)',
        'gradient-clean': 'linear-gradient(135deg, #00DC82 0%, #0d9488 100%)',
        'gradient-hero': 'linear-gradient(135deg, #020617 0%, #00DC82 50%, #34d399 100%)',
        'gradient-industrial': 'linear-gradient(135deg, #020617 0%, #1e293b 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #eab308 100%)',
        'gradient-cool': 'linear-gradient(135deg, #020617 0%, #00DC82 100%)',
        'gradient-professional': 'linear-gradient(135deg, #020617 0%, #00DC82 50%, #34d399 100%)',
        // Novos gradientes mais vibrantes e modernos
        'gradient-ocean': 'linear-gradient(135deg, #020617 0%, #00DC82 50%, #34d399 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #020617 0%, #f97316 50%, #fbbf24 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #020617 0%, #8b5cf6 50%, #00DC82 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #020617 0%, #3730a3 50%, #00DC82 100%)',
        'gradient-electric': 'linear-gradient(135deg, #020617 0%, #00DC82 50%, #34d399 100%)',
        'gradient-fire': 'linear-gradient(135deg, #020617 0%, #dc2626 50%, #00DC82 100%)',
        'gradient-neon': 'linear-gradient(135deg, #00DC82 0%, #16a34a 50%, #020617 100%)',
        'gradient-royal': 'linear-gradient(135deg, #020617 0%, #7c3aed 50%, #00DC82 100%)',
        'gradient-tropical': 'linear-gradient(135deg, #00DC82 0%, #22c55e 50%, #020617 100%)',
        'gradient-midnight': 'linear-gradient(135deg, #020617 0%, #1e293b 50%, #00DC82 100%)'
      },
      // Sombras personalizadas
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(59, 130, 246, 0.25)',
        'secondary': '0 4px 14px 0 rgba(100, 116, 139, 0.25)',
        'accent': '0 4px 14px 0 rgba(249, 115, 22, 0.25)',
        'success': '0 4px 14px 0 rgba(34, 197, 94, 0.25)',
        'clean': '0 4px 14px 0 rgba(20, 184, 166, 0.25)',
        'industrial': '0 4px 14px 0 rgba(51, 65, 85, 0.25)',
        // Novas sombras mais dramáticas
        'custom-sm': '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
        'custom-md': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'custom-lg': '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
        'custom-xl': '0 16px 64px 0 rgba(0, 0, 0, 0.2)',
        'glow-primary': '0 0 20px rgba(2, 6, 23, 0.5), 0 0 40px rgba(2, 6, 23, 0.3), 0 0 60px rgba(2, 6, 23, 0.1)',
        'glow-secondary': '0 0 20px rgba(0, 220, 130, 0.5), 0 0 40px rgba(0, 220, 130, 0.3), 0 0 60px rgba(0, 220, 130, 0.1)',
        'glow-accent': '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3), 0 0 60px rgba(249, 115, 22, 0.1)',
        'glow-success': '0 0 20px rgba(0, 220, 130, 0.5), 0 0 40px rgba(0, 220, 130, 0.3), 0 0 60px rgba(0, 220, 130, 0.1)'
      }
    }
  },
  plugins: []
}