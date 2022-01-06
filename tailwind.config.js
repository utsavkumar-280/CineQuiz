const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},

			colors: {
				themeBg: "#051c25",
				themeCard: "#142a33",
			},
		},
		screens: {
			smest: "360px",
			smer: "411px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
