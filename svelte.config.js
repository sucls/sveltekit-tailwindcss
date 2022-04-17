import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: `@import "bootstrap/scss/bootstrap.scss";`,
				outputStyle: 'compressed',
			},
			preserve: ['ld+json'],
		})
	],

	kit: {
		adapter: adapter(),
		// vite config 
		vite: {
			resolve: {
			  alias: {
				'@': path.resolve('./src'),
				'$lib': path.resolve('./src/lib'),
				'$comp': path.resolve('./src/components'),
			  },
			},
			css: {
				//css预处理
				preprocessorOptions: {
					scss: {
						//  无效？
						additionalData: `@import "bootstrap/scss/bootstrap.scss";`
					}
				}
			},
			plugins:[
				
			]
		}
	}
};

export default config;
