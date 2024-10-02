/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Enable class-based dark mode
	content: [
	  "./pages/**/*.{js,jsx}",
	  "./components/**/*.{js,jsx}",
	  "./app/**/*.{js,jsx}",
	  "./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	  },
	  extend: {
		colors: {
		  // Dark mode variants
		  primary: {
			DEFAULT: "#0FA44A", // Default color
			dark: "#1e1e1e", // Dark mode color
		  },
		  secondary: {
			DEFAULT: "#374A54",
			dark: "#2e2e3e",
		  },
		  lightGray: {
			DEFAULT: "#EDECEC",
			dark: "#2E2E2E",
		  },
		  darkGray: {
			DEFAULT: "#283C43",
			dark: "#4caf50",
		  },
		  textColor: {
			DEFAULT: "#292827",
			dark: "#E4E4E4",
		  },
		  hover: {
			DEFAULT: "#13c55a",
			dark: "#0c993f",
		  },
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  