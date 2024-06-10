import { vueuse } from "@devtools-dev/util";
import { defineStore } from "pinia";

import { useTheme } from "../composables/useTheme";

export const useThemeStore = defineStore("theme", () => {
	const currentTheme = vueuse.storage.useStorage<"light" | "dark">("dexing_theme", "dark");

	const { init: _init, getThemeKey, changeTheme: _changeTheme } = useTheme();

	const init = () => {
		if (!currentTheme.value) {
			currentTheme.value = getThemeKey();
			_init();
		}
		changeTheme(currentTheme.value);
	};

	const changeTheme = (themeKey: "light" | "dark") => {
		currentTheme.value = themeKey;
		_changeTheme(themeKey);
	};

	return { currentTheme, init, changeTheme };
});
