<script>
	import { addTodo } from '../stores/todoStore.js';

	/**
	 * Holds the current text entered into the todo input field.
	 * Bound to the input element using Svelte's bind:value directive.
	 * @type {string}
	 */
	let newTodoText = '';

	/**
	 * Handles the form submission event.
	 * Prevents the default form submission behavior.
	 * Trims the input text, validates that it's not empty,
	 * calls the addTodo store function if valid, and clears the input field.
	 * @returns {void}
	 */
	function handleSubmit() {
		const trimmedText = newTodoText.trim();
		if (trimmedText === '') {
			// Prevent adding empty or whitespace-only todos
			return;
		}
		addTodo(trimmedText);
		newTodoText = ''; // Clear the input field after successful submission
	}
</script>

<!-- 
  Form element handles the submission. 
  on:submit|preventDefault calls handleSubmit and prevents full page reload.
  Tailwind classes for layout (flexbox).
-->
<form on:submit|preventDefault={handleSubmit} class="flex items-center gap-2 p-4 bg-white rounded shadow">
	<label for="new-todo-input" class="sr-only">New todo description</label>
	<input
		id="new-todo-input"
		type="text"
		bind:value={newTodoText}
		placeholder="What needs to be done?"
		aria-label="New todo description"
		class="flex-grow px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
	/>
	<button
		type="submit"
		class="px-4 py-2 font-semibold text-white bg-blue-600 rounded shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
	>
		Add
	</button>
</form>