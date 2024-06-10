<template>
	<Switch
		class="bg-accent"
		:checked="currentTheme === 'dark'"
		:disabled="disabled"
		@update:checked="toggleTheme"
	>
		<template #on-icon>
			<Moon v-if="currentTheme === 'dark'" />
		</template>
		<template #off-icon>
			<Sun v-if="currentTheme === 'light'" class="text-white" />
		</template>
	</Switch>
</template>

<script setup lang="ts">
import { Moon, Sun } from "@devtools-dev/icon";
import { Switch } from "@devtools-dev/ui";
import { storeToRefs } from "pinia";

import { useThemeStore } from "@/6_shared/themes/model/store";

defineProps<{
	disabled?: boolean;
}>();

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
const { changeTheme } = themeStore;

const toggleTheme = () => {
	changeTheme(currentTheme.value === "dark" ? "light" : "dark");
};
</script>

<style scoped></style>
