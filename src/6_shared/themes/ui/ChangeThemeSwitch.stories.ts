import type { Meta, StoryObj } from "@storybook/vue3";

import ChangeThemeSwitch from "./ChangeThemeSwitch.vue";

const meta: Meta<typeof ChangeThemeSwitch> = {
	component: ChangeThemeSwitch
};

export default meta;
type Story = StoryObj<typeof ChangeThemeSwitch>;

export const Template: Story = {
	render: (args) => ({
		components: { ChangeThemeSwitch },
		setup() {
			return { args };
		},
		template: `<ChangeThemeSwitch v-bind="args"></ChangeThemeSwitch>`
	}),
	args: {
		// Add default props here
	},
	argTypes: {
		// Add argTypes here
	}
};
