import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocessor({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],
	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	}
};

export default config;
