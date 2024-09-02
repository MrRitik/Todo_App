import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
  const updateTodo = (title, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([...todos, { id: uuidv4(), title: input }]);
      setInput("");
    } else {
      updateTodo(input, edit.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 px-10 pt-9 mb-6">
      <input
        type="text"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Task"
        className="py-2 px-2 w-80 "
      />

      <button
        type="sumbit"
        className="bg-green-500 rounded-xl hover:bg-green-600 w-20"
      >
        {edit ? "OK" : "ADD"}
      </button>
    </form>
  );
};

export default Input;
