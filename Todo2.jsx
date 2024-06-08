import { useState } from "react";

export function TodoList2() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();

    const todo = event.target.elements.todo.value;

    setTodos((todos) => [...todos, todo]);

    event.target.elements.todo.value = "";
  }

  function handleResetTodos() {
    setTodos([]);
  }

  function handleDelete(index) {
    setTodos((todos) => todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input data-testid="todo-input" name="todo" />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleResetTodos}>Reset</button>

      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
