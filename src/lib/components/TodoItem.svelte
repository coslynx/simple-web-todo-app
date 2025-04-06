<script>
  import { toggleTodo, deleteTodo } from '../stores/todoStore.js';

  /**
   * Represents the todo item data passed from the parent component.
   * Contains the unique ID, descriptive text, and completion status.
   * @type {{ id: string; text: string; completed: boolean }}
   */
  export let todo;

  // Generate a unique ID for the text span to be used by aria-labelledby
  const textId = `todo-text-${todo.id}`;

</script>

<!--
  List item container for a single todo.
  Uses flexbox to align items and justify content between the main todo info and the delete button.
  Styled with background, padding, rounded corners, shadow, and margin consistent with the app's design.
-->
<li class="flex items-center justify-between p-4 bg-white rounded shadow mb-2">
  <!-- Inner container for checkbox and text, allowing text to grow -->
  <div class="flex items-center flex-grow mr-4 min-w-0">
    <!-- Checkbox to toggle completion status -->
    <input
      type="checkbox"
      bind:checked={todo.completed}
      on:change={() => toggleTodo(todo.id)}
      aria-labelledby={textId}
      class="h-5 w-5 text-blue-600 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 mr-3 shrink-0 cursor-pointer"
    />
    <!-- Todo text, conditionally styled when completed -->
    <span
      id={textId}
      class="flex-grow break-words"
      class:line-through={todo.completed}
      class:text-gray-500={todo.completed}
    >
      {todo.text}
    </span>
  </div>

  <!-- Delete button -->
  <button
    on:click={() => deleteTodo(todo.id)}
    aria-label={`Delete todo: ${todo.text}`}
    title="Delete todo"
    class="text-gray-400 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 rounded-full p-1 transition duration-150 ease-in-out shrink-0"
  >
    <!-- SVG 'X' icon for deletion -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</li>