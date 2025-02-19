import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			particle: { /* ... particle keyframes ... */ },
  			spotlight: { /* ... spotlight keyframes ... */ },
  			'blob-1': { /* ... blob-1 keyframes ... */ },
  			'blob-2': { /* ... blob-2 keyframes ... */ },
  			gridFade: { /* ... gridFade keyframes ... */ },
  			'shapeRotate': {
  				'0%, 100%': { transform: 'rotate(0deg) scale(1)' },
  				'50%': { transform: 'rotate(180deg) scale(1.1)' },
  			},
  			'shapePulse': {
  				'0%, 100%': { transform: 'scale(1)' },
  				'50%': { transform: 'scale(1.1)' },
  			},
  			'lineHorizontal': {
  				'0%': { transform: 'translateX(-50%)', opacity: '0.4' },
  				'50%': { transform: 'translateX(50%)', opacity: '1' },
  				'100%': { transform: 'translateX(-50%)', opacity: '0.4' },
  			},
  			marquee: {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-50%)' },
  			},
  			'counter': {
  				'0%': { opacity: '0', transform: 'translateY(20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' },
  			},
  			'float-1': {
  				'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
  				'50%': { transform: 'translate(-50%, -50%) scale(1.05) translate(40px, -20px)' },
  			},
  			'float-2': {
  				'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
  				'50%': { transform: 'translate(-50%, -50%) scale(1.05) translate(-30px, 30px)' },
  			},
  			'float-3': {
  				'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
  				'50%': { transform: 'translate(-50%, -50%) scale(1.05) translate(20px, 20px)' },
  			},
  			glow: {
  				'0%': { backgroundPosition: '200% 50%' },
  				'100%': { backgroundPosition: '-200% 50%' },
  			},
  			ctaBlur1: {
  				'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
  				'50%': { transform: 'translate(-50%, -50%) scale(1.2) rotate(20deg)' },
  			},
  			ctaBlur2: {
  				'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
  				'50%': { transform: 'translate(-50%, -50%) scale(0.8) rotate(-20deg)' },
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-20px)' },
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'particle': 'particle 6s linear infinite',
  			'spotlight': 'spotlight 12s linear infinite',
  			'blob-1': 'blob-1 20s infinite',
  			'blob-2': 'blob-2 25s infinite',
  			'grid-fade': 'gridFade 2s linear infinite',
  			'shape-rotate': 'shapeRotate 15s linear infinite',
  			'shape-pulse': 'shapePulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'line-horizontal': 'lineHorizontal 8s linear infinite',
  			'marquee': 'marquee 40s linear infinite',
  			'counter': 'counter 2s ease-out forwards',
  			'float-1': 'float-1 20s ease-in-out infinite',
  			'float-2': 'float-2 25s ease-in-out infinite',
  			'float-3': 'float-3 30s ease-in-out infinite',
  			'glow': 'glow 6s linear infinite',
  			'cta-blur-1': 'ctaBlur1 25s infinite',
  			'cta-blur-2': 'ctaBlur2 30s infinite',
  			'float': 'float 6s ease-in-out infinite',
  		}
  	}
  },
  plugins: [animate],
} satisfies Config;
