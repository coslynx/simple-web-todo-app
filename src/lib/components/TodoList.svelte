<script>
  // Import the reactive todos store from the central store module.
  import { todos } from '../stores/todoStore.js';

  // Import the component responsible for rendering a single todo item.
  import TodoItem from './TodoItem.svelte';
</script>

<!-- 
  Unordered list to contain the todo items.
  Uses Tailwind utility classes to remove default list styling and margins/padding.
  Adds a top margin for spacing from the AddTodoForm.
-->
<ul class="list-none p-0 m-0 mt-4">
  <!-- 
    Svelte's #each block iterates over the reactive $todos store array.
    Crucially, `(todo.id)` is used as the key for efficient list updates and rendering.
    The #else block is rendered when the $todos array is empty.
  -->
  {#each $todos as todo (todo.id)}
    <!-- 
      Renders the TodoItem component for each todo in the array.
      Passes the current todo object from the iteration as a prop
      using the Svelte shorthand syntax: {todo} is equivalent to todo={todo}.
    -->
    <TodoItem {todo} />
  {:else}
    <!-- 
      Displayed when the todo list is empty.
      Uses Tailwind classes for centering text, setting text color, and adding padding.
      Provides user guidance on how to add items.
    -->
    <p class="text-center text-gray-500 py-4">No todos yet. Add one above!</p>
  {/each}
</ul>