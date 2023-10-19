import React, { useState } from "react";
import TodoCard from "./TodoCard";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Complete homework", completed: true },
    { id: 2, title: "Go for a run", completed: false },
  ]);

  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleToggle = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default TodoApp;
