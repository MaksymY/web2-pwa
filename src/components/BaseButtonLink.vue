<template>
	<component
		:is="is_not_nouter_link ? tag : 'router-link'"
		v-on="$listeners"
		v-bind="attrs"
		class="baseButtonLink"
		:class="{
			'baseButtonLink--disabled': is_element_disabled,
			'baseButtonLink--button': is_button,
			'baseButtonLink--negative': negative,
			'baseButtonLink--uppercase': uppercase,
			'baseButtonLink--full': full,
		}"
	><slot/></component>
</template>

<script>
export default {
	name: "BaseButtonLink",
	inheritAttrs: false,
	props: {
		negative: {
			type: Boolean,
			required: false,
			default: false,
			validator: v => typeof v === "boolean",
		},
		full: {
			type: Boolean,
			required: false,
			default: false,
			validator: v => typeof v === "boolean",
		},
		uppercase: {
			type: Boolean,
			required: false,
			default: false,
			validator: v => typeof v === "boolean",
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
			validator: v => typeof v === "boolean",
		},
	},
	computed: {
		tag() {
			return this.$attrs.tag || "a";
		},
		is_button() {
			return this.tag === "button";
		},
		is_element_disabled() {
			return this.disabled && !this.is_button;
		},
		is_not_nouter_link() {
			return !this.$attrs.to || this.is_element_disabled;
		},
		attrs() {
			const attrs = { disabled: this.disabled && this.is_button };
			return this.is_not_nouter_link ? attrs : Object.assign(attrs, this.$attrs);
		},
	},
};
</script>

<style lang="scss">
.baseButtonLink {
	padding: 1em 2em;
	border-radius: .3em;
	display: inline-block;
	color: $color_white_1;
	background-color: $color_grey_1;
	border: $color_grey_1 2px solid;
	text-decoration: none;
	outline: none;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;
	box-sizing: border-box;

	&--disabled,
	&--button:disabled {
		/* TODO CHANGE COLOR */
		border-color: grey;
		background-color: grey;
	}

	&--full {
		width: 100%;
		display: block;
	}

	&--negative {
		color: $color_grey_1;
		background-color: transparent;
	}

	&--uppercase {
		text-transform: uppercase;
	}
}
</style>