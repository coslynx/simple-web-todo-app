import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

/**
 * The key used to store the todos in localStorage.
 * @type {string}
 */
export const STORAGE_KEY = 'todos';

/**
 * Represents a single todo item.
 * @typedef {object} TodoItem
 * @property {string} id - Unique identifier for the todo item.
 * @property {string} text - The description of the todo task.
 * @property {boolean} completed - Whether the todo task is completed.
 */

/**
 * Loads initial todos from localStorage or defaults to an empty array.
 * Handles potential parsing errors and non-browser environments.
 * @returns {TodoItem[]} The initial array of todo items.
 */
function loadInitialTodos() {
	let initialTodos = [];
	// Check if running in a browser environment with localStorage support
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedTodos = window.localStorage.getItem(STORAGE_KEY);
		if (storedTodos) {
			try {
				initialTodos = JSON.parse(storedTodos);
				// Basic validation to ensure it's an array
				if (!Array.isArray(initialTodos)) {
					console.warn(`Invalid data found in localStorage for key "${STORAGE_KEY}". Expected an array. Resetting to empty.`);
					initialTodos = [];
				}
				// Further validation could be added here to check item structure if needed
			} catch (error) {
				console.warn(`Failed to parse todos from localStorage for key "${STORAGE_KEY}". Resetting to empty. Error:`, error);
				initialTodos = [];
			}
		}
	}
	return initialTodos;
}

const initialTodos = loadInitialTodos();

/**
 * A Svelte writable store containing the list of todo items.
 * The store's state is automatically persisted to localStorage.
 * @type {import('svelte/store').Writable<TodoItem[]>}
 */
export const todos = writable(initialTodos);

// Subscribe to store changes and persist to localStorage
todos.subscribe(($todos) => {
	// Check if running in a browser environment with localStorage support
	if (typeof window !== 'undefined' && window.localStorage) {
		try {
			const todosString = JSON.stringify($todos);
			window.localStorage.setItem(STORAGE_KEY, todosString);
		} catch (error) {
			console.warn(`Failed to save todos to localStorage for key "${STORAGE_KEY}". Error:`, error);
			// Handle potential errors like quota exceeded
		}
	}
});

/**
 * Adds a new todo item to the list.
 * @param {string} text - The text content of the new todo. Input is trimmed.
 * @returns {void}
 */
export function addTodo(text) {
	const trimmedText = text.trim();
	if (!trimmedText) {
		// Prevent adding empty todos
		return;
	}

	const newTodo = {
		id: uuidv4(),
		text: trimmedText,
		completed: false
	};

	todos.update((currentTodos) => {
		// Add to the end of the list
		return [...currentTodos, newTodo];
	});
}

/**
 * Toggles the completion status of a specific todo item.
 * @param {string} id - The unique identifier of the todo item to toggle.
 * @returns {void}
 */
export function toggleTodo(id) {
	if (!id) {
		console.warn('toggleTodo called with invalid id:', id);
		return;
	}
	todos.update((currentTodos) =>
		currentTodos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		)
	);
}

/**
 * Deletes a specific todo item from the list.
 * @param {string} id - The unique identifier of the todo item to delete.
 * @returns {void}
 */
export function deleteTodo(id) {
	if (!id) {
		console.warn('deleteTodo called with invalid id:', id);
		return;
	}
	todos.update((currentTodos) =>
		currentTodos.filter((todo) => todo.id !== id)
	);
}