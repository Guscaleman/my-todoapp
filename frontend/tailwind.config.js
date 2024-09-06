/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"color-primary": "#ff8c00",
				"color-secondary": "#ff5e0e;",
				"color-primary-negative": "#c35214",
				"color-success": "#3fe864",
				"color-negative": "#e62929",
				"gray-0": "#f8f9fa",
				"gray-1": "#868e96",
				"gray-2": "#343b41",
				"gray-3": "#212529",
				"gray-4": "#121214",
				"black-alpha": "rgba(0, 0, 0, 0.188)",
			},
			width: {
				"270px": "270px",
				"320px": "320px",
				"100p": "100%",
				"90p": "90%",
				"84.5p": "84.5%",
				"70p": "70%",
			},
			maxHeight: {
				"80vh": "80vh",
			},
			maxWidth: {
				"342px": "342px",
			},
			minWidth: {
				"342px": "342px",
			},
			height: {
				auto: "auto",
			},
			boxShadow: {
				custom: "0 0 1rem 0 rgba(0, 0, 0, 0.314)",
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				"custom-dark": "#212529",
			},
		},
		fontSize: {
			"title1-size": "1.125rem",
			"title2-size": "1rem",
			"headline-size": "0.75rem",
			"paragraph-size": "1rem",
		},
		fontWeight: {
			"title-weight": "700",
			"headline-regular": "400",
			"headline-bold": "700",
			"paragraph-weight": "400",
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
	},
	plugins: [
		({ addBase, addUtilities }) => {
			addBase({
				".input-default:hover": {
					"@apply ring-0 border-gray-0 text-gray-0": {},
				},
				".btn-primary:hover": {
					"@apply rounded border border-color-secondary bg-color-secondary": {},
				},
				".btn-register:hover": {
					"@apply rounded border border-gray-2 bg-gray-2": {},
				},
				".form-content h1": { "@apply mt-8 mb-4": {} },
				"a:hover": { "@apply text-white": {} },
				".modal-header button": { "@apply text-gray-1": {} },
				".modal-form input, .modal-form textarea": {
					"@apply w-90p max-w-342px max-h-36": {},
				},
				".dash-header button": {
					"@apply rounded bg-gray-3 text-gray-0 py-2 px-3.5": {},
				},
				".dash-content button": {
					"@apply rounded bg-gray-3 text-gray-0 text-title1-size py-2 px-3.5":
						{},
				},
				".dash-content button:hover, .dash-header button:hover, .reg-header a:hover":
					{
						"@apply text-color-primary": {},
					},
				".card-container a": { "@apply cursor-pointer": {} },
				".card-container a:hover": { "@apply text-color-primary": {} },
				".card-buttons svg:hover": { "@apply fill-color-primary": {} },
			});
			addUtilities({
				".border-bottom-custom": {
					"border-bottom": "1px solid #212529",
				},
			});
		},
	],
};
