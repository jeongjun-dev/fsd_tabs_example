import { theme, themeColors } from "..";

export type ThemeKey = keyof typeof themeColors;

export const useTheme = () => {
	/**
	 * Initialize the theme
	 *
	 * dom이 mount되기 전에 실행되어야 함
	 */
	function init() {
		const themeKey = getThemeKey();
		const themeColor = themeColors[themeKey];
		setThemeProperties(themeColor);
	}

	function changeTheme(themeKey: keyof typeof themeColors) {
		const themeColor = themeColors[themeKey];
		setThemeProperties(themeColor);
	}

	function getThemeKey(): keyof typeof themeColors {
		let themeKey;
		if (!themeKey) {
			themeKey = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}
		return themeKey as keyof typeof themeColors;
	}

	function setThemeProperties(themeColors: { [key: string]: string }) {
		const root = document.querySelector(":root") as HTMLElement;

		Object.entries(themeColors).forEach(([key, value]) => {
			root?.style.setProperty(`--${key}`, value);
		});

		Object.entries(theme.spacing).forEach(([key, value]) => {
			root?.style.setProperty(`--spacing-${key}`, value);
		});
	}

	return { init, changeTheme, getThemeKey };
};
