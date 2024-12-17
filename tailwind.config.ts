import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	screens: {
    		sm: '375px',
    		md: '768px',
    		lg: '1440px'
    	},
    	extend: {
    		colors: {
    			'blue-900': 'rgb(11, 13, 23)',
    			'blue-300': 'rgb(208, 214, 249)',
    			white: 'rgb(255, 255, 255)',
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
    			}
    		},
    		fontFamily: {
    			bellefair: [
    				'var(--font-bellefair)'
    			],
    			'barlow-condensed': [
    				'var(--font-barlow-condensed)'
    			],
    			barlow: [
    				'var(--font-barlow)'
    			]
    		},
    		fontSize: {
    			'preset-1': [
    				'144px',
    				{
    					lineHeight: '171.9%',
    					letterSpacing: '0px'
    				}
    			],
    			'preset-2': [
    				'100px',
    				{
    					lineHeight: '114.6%',
    					letterSpacing: '0px'
    				}
    			],
    			'preset-3': [
    				'56px',
    				{
    					lineHeight: '64.2%',
    					letterSpacing: '0px'
    				}
    			],
    			'preset-4': [
    				'32px',
    				{
    					lineHeight: '36.7%',
    					letterSpacing: '0px'
    				}
    			],
    			'preset-5': [
    				'28px',
    				{
    					lineHeight: '33.6%',
    					letterSpacing: '4px'
    				}
    			],
    			'preset-6': [
    				'28px',
    				{
    					lineHeight: '32.1%',
    					letterSpacing: '0px'
    				}
    			],
    			'preset-7': [
    				'14px',
    				{
    					lineHeight: '16.8%',
    					letterSpacing: '2px'
    				}
    			],
    			'preset-8': [
    				'16px',
    				{
    					lineHeight: '19.2%',
    					letterSpacing: '2px'
    				}
    			],
    			'preset-9': [
    				'18px',
    				{
    					lineHeight: '180%',
    					letterSpacing: '0px'
    				}
    			]
    		},
    		spacing: {
    			'2': '2px',
    			'4': '4px',
    			'8': '8px',
    			'12': '12px',
    			'16': '16px',
    			'24': '24px',
    			'32': '32px',
    			'40': '40px',
    			'48': '48px',
    			'64': '64px',
    			'80': '80px',
    			'96': '96px',
    			'120': '120px',
    			'128': '128px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
