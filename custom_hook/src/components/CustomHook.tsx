import * as React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage.tsx";

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

const CustomHook = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useLocalStorage<Todo[]>("todolist", []);

 const handleAddNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), text: newTodo, done: false }]);
    setNewTodo("");
  };

  const handleToggleTodo = (todoToToggle: Todo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoToToggle.id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggleTodo(todo)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomHook;
