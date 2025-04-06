import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [sveltekit()],
	// No additional server or build configurations are needed for this MVP.
	// SvelteKit's Vite plugin handles the necessary defaults for development,
	// static builds (via adapter-static in svelte.config.js), and previewing.
});