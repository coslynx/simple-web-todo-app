// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface Error {}
		interface Locals {}
		interface PageData {}
		// interface Platform {} // Deprecated: Use PrivateEnv and PublicEnv instead
		interface PrivateEnv {}
		interface PublicEnv {}
	}
}

export {}; // This ensures the file is treated as a module.