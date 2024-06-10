// https://www.figma.com/file/riubhfWarWkFmssAwee4sn/Dapping_color_v2?type=design&node-id=17%3A6824&mode=dev

const theme = {
	colors: {
		"main-text": "rgba(var(--main-text), <alpha-value>)",
		"main-icon": "rgba(var(--main-icon), <alpha-value>)",
		"main-button": "rgba(var(--main-button), <alpha-value>)",
		"main-button-on": "rgba(var(--main-button-on), <alpha-value>)",
		"main-border": "rgba(var(--main-border), <alpha-value>)",
		"main-divider": "rgba(var(--main-divider), <alpha-value>)",
		"sub-text": "rgba(var(--sub-text), <alpha-value>)",
		"sub-icon": "rgba(var(--sub-icon), <alpha-value>)",
		"sub-button-1": "rgba(var(--sub-button-1), <alpha-value>)",
		"sub-button-2": "rgba(var(--sub-button-2), <alpha-value>)",
		"sub-button-on": "rgba(var(--sub-button-on), <alpha-value>)",
		"sub-border": "rgba(var(--sub-border), <alpha-value>)",
		placeholder: "rgba(var(--placeholder), <alpha-value>)",
		accent: "rgba(var(--accent), <alpha-value>)",
		overlay: "rgba(var(--overlay), <alpha-value>)",
		tooltip: "rgba(var(--tooltip), <alpha-value>)",

		// bg
		empty: "rgba(var(--empty), <alpha-value>)",
		page: "rgba(var(--page), <alpha-value>)",
		modal: "rgba(var(--modal), <alpha-value>)",
		"layer-1": "rgba(var(--layer-1), <alpha-value>)",
		"layer-2": "rgba(var(--layer-2), <alpha-value>)",
		"layer-3": "rgba(var(--layer-3), <alpha-value>)",

		// state
		error: "rgba(var(--error), <alpha-value>)",
		"error-secondary": "rgba(var(--error-secondary), <alpha-value>)",
		warning: "rgba(var(--warning), <alpha-value>)",
		"warning-secondary": "rgba(var(--warning-secondary), <alpha-value>)",
		success: "rgba(var(--success), <alpha-value>)",
		"success-secondary": "rgba(var(--success-secondary), <alpha-value>)",
		info: "rgba(var(--info), <alpha-value>)",
		"info-secondary": "rgba(var(--info-secondary), <alpha-value>)",

		// DEX 전용
		buy: "rgba(var(--buy), <alpha-value>)",
		"buy-secondary": "rgba(var(--buy-secondary), <alpha-value>)",
		sell: "rgba(var(--sell), <alpha-value>)",
		"sell-secondary": "rgba(var(--sell-secondary), <alpha-value>)"
	},

	fontSize: {
		"display-l": [
			"2.5rem",
			{
				fontWeight: 700,
				lineHeight: "60px"
			}
		],
		"display-m": [
			"2.25rem",
			{
				fontWeight: 700,
				lineHeight: "54px"
			}
		],
		"display-s": [
			"2rem",
			{
				fontWeight: 700,
				lineHeight: "48px"
			}
		],
		"headline-l": [
			"1.75rem",
			{
				fontWeight: 600,
				lineHeight: "42px"
			}
		],
		"headline-m": [
			"1.5rem",
			{
				fontWeight: 600,
				lineHeight: "36px"
			}
		],
		"headline-s": [
			"1.25rem",
			{
				fontWeight: 600,
				lineHeight: "30px"
			}
		],
		"title-l": [
			"1.125rem",
			{
				fontWeight: 500,
				lineHeight: "24px"
			}
		],
		"title-m": [
			"1rem",
			{
				fontWeight: 500,
				lineHeight: "22px"
			}
		],
		"title-s": [
			"0.875rem",
			{
				fontWeight: 500,
				lineHeight: "20px"
			}
		],
		"body-l": [
			"1rem",
			{
				fontWeight: 400,
				lineHeight: "24px"
			}
		],
		"body-m": [
			"0.875rem",
			{
				fontWeight: 400,
				lineHeight: "20px"
			}
		],
		"body-s": [
			"0.75rem",
			{
				fontWeight: 400,
				lineHeight: "18px"
			}
		],
		"label-l": [
			"1rem",
			{
				fontWeight: 500,
				lineHeight: "22px"
			}
		],
		"label-m": [
			"0.875rem",
			{
				fontWeight: 500,
				lineHeight: "20px"
			}
		],
		"label-s": [
			"0.75rem",
			{
				fontWeight: 500,
				lineHeight: "18px"
			}
		],
		"label-xs": [
			"0.625rem",
			{
				fontWeight: 500,
				lineHeight: "16px"
			}
		]
	},
	spacing: {
		// Padding
		"layer-page": "8px",
		"page-modal": "16px",
		"layer-1": "16px",
		"layer-2": "12px",
		"layer-3": "8px",

		// gap
		"gap-layer-page": "8px",
		"gap-page-modal": "16px",
		"gap-layer-1": "16px",
		"gap-layer-2": "12px",
		"gap-layer-3": "8px",
		"gap-group-button": "8px",
		"gap-group-chip": "12px",
		"gap-group-card": "12px",
		"gap-group-list": "0px",
		"gap-group-table": "0px",
		"gap-group-text": "8px",
		"gap-group-tab": "16px",
		"gap-group-text-with-icon": "4px", // 임시 - 추후 정리 필요
		"gap-filters": "20px"
	},
	opacity: {
		disabled: 0.4
	},
	brightness: {
		hover: 1.1,
		active: 1.1
	},
	saturate: {
		hover: 1.1,
		active: 1.1
	},
	scale: {
		"button-active": ".95"
	},
	borderRadius: {
		page: "0px",
		"page-modal": "12px",
		"layer-1": "4px",
		"layer-2": "4px",
		"layer-3": "4px",
		"accordion-item": "8px"
	},
	screens: {
		xs: "360px",
		sm: "768px",
		md: "1280px",
		lg: "1920px"
	}
};

export { theme };
