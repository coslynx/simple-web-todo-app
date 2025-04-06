<!--
 This is the root layout component for the SvelteKit application.
 It wraps all page content provided by the router via the <slot />.
 Global styles, including Tailwind CSS base, components, and utilities,
 are applied via src/app.css, which is implicitly included by SvelteKit.
 This layout provides a consistent structural shell.
-->
<script lang="ts">
	// No specific script logic is required for this simple root layout in the MVP.
	// Global styles are handled by src/app.css.
	// Page-specific logic resides in +page.svelte or other components.

	// Ensure app.css is processed and included by referencing it.
	// SvelteKit handles this automatically when styles are needed,
	// but an explicit import reinforces the dependency if needed for tooling.
	// However, standard SvelteKit setup doesn't require this explicit import here.
	// import '../app.css';
</script>

<!--
 The <main> element serves as the primary content container for the application.
 - `min-h-screen`: Ensures the layout takes at least the full viewport height.
 - `bg-gray-100`: Sets the background color, consistent with body styles in app.css.
 - `container`: Constrains the content width to standard breakpoints.
 - `mx-auto`: Centers the container horizontally.
 - `p-4`: Adds padding around the content area.
-->
<main class="container mx-auto min-h-screen bg-gray-100 p-4">
	<!--
	 SvelteKit's <slot /> component renders the content of the currently matched
	 page (+page.svelte) or an error page (+error.svelte).
	 This is the core mechanism for page routing and content injection.
	-->
	<slot />
</main>