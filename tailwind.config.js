/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Ajuste para refletir os arquivos do seu projeto
	theme: {
	  extend: {
		fontFamily: {
		  smoochregular: ['SmoochSansRegular'],
		  smoochbold: ['SmoochSansBold'],
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		  sidebar: {
			DEFAULT: 'hsl(var(--sidebar-background))',
			foreground: 'hsl(var(--sidebar-foreground))',
			primary: 'hsl(var(--sidebar-primary))',
			'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
			accent: 'hsl(var(--sidebar-accent))',
			'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
			border: 'hsl(var(--sidebar-border))',
			ring: 'hsl(var(--sidebar-ring))',
		  },
		},
		keyframes: {
		  colorSlide: {
			'0%': { backgroundPosition: '0% 100%' },
			'20%': { backgroundPosition: '0% 0%' },
			'21%': { backgroundColor: 'var(--colorOutlineFade)' },
			'29.99%': { backgroundColor: 'var(--colorOutline)', backgroundPosition: '0% 0%' },
			'30%': { backgroundColor: 'var(--colorOutlineFade)', backgroundPosition: '0% 100%' },
			'50%': { backgroundPosition: '0% 0%' },
			'51%': { backgroundColor: 'var(--colorOutlineFade)' },
			'59%': { backgroundColor: 'var(--colorOutline)', backgroundPosition: '0% 0%' },
			'60%': { backgroundColor: 'var(--colorOutlineFade)', backgroundPosition: '0% 100%' },
			'80%': { backgroundPosition: '0% 0%' },
			'81%': { backgroundColor: 'var(--colorOutlineFade)' },
			'90%, 100%': { backgroundColor: 'var(--colorOutline)' },
		  },
		  trackBallSlide: {
			'0%': {
			  opacity: 1,
			  transform: 'scale(1) translateY(-var(--posTrackball))',
			},
			'6%': {
			  opacity: 1,
			  transform: 'scale(0.9) translateY(var(--posTrackball)/4)',
			},
			'14%': {
			  opacity: 0,
			  transform: 'scale(var(--shrinkTrackball)) translateY(var(--posTrackball)*2)',
			},
			'100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
		  },
		  nudgeMouse: {
			'0%': { transform: 'translateY(0)' },
			'20%': { transform: 'translateY(var(--posMouse))' },
			'30%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(var(--posMouse))' },
			'60%': { transform: 'translateY(0)' },
			'80%': { transform: 'translateY(var(--posMouse))' },
			'100%': { transform: 'translateY(0)' },
		  },
		},
		animation: {
		  colorSlide: 'colorSlide var(--animDuration) linear infinite',
		  trackBallSlide: 'trackBallSlide var(--animDuration) linear infinite',
		  nudgeMouse: 'nudgeMouse var(--animDuration) ease-out infinite',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  