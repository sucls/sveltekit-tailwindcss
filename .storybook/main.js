const postcss = require('postcss');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    // '@storybook/addon-cssresources',
    // {
		// 	name: '@storybook/addon-postcss',
		// 	options: {
		// 		postcssLoaderOptions: {
		// 			implementation: postcss,
		// 		},
		// 	},
		// },
    '@storybook/preset-scss'
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": [
      sveltePreprocess({
				postcss: true,
				scss: {
					prependData: `@import "bootstrap/scss/bootstrap.scss";`,
					outputStyle: 'compressed',
				},
				preserve: ['ld+json'],
			}),
    ]
  }
}