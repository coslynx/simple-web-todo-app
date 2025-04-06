<!--
 This is the main page component for the root route ('/').
 It assembles the UI for the Todo application by rendering the AddTodoForm and TodoList components.
 Styling is done using Tailwind CSS utility classes.
-->
<script lang="ts">
	// Import the necessary child components.
	import AddTodoForm from '$lib/components/AddTodoForm.svelte';
	import TodoList from '$lib/components/TodoList.svelte';

	// No page-specific logic or state is needed here for the MVP.
	// Functionality is handled by the imported components and the central store.
</script>

<!-- Page Title -->
<h1 class="mb-6 text-center text-3xl font-bold text-gray-700">
	Simple Todo App
</h1>

<!-- Container for the form and list with vertical spacing -->
<div class="space-y-4">
	<!-- Render the form component for adding new todos -->
	<AddTodoForm />

	<!-- Render the component that displays the list of todos -->
	<TodoList />
</div>