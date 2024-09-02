import React from "react";

const Task = ({ todos, setTodos, setEdit }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
  };

  return (
    <div className="grid grid-rows-1 gap-5 px-8 pt-5">
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-2 ml-6">
          <div>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
              className="py-2 px-2 w-64"
            />
          </div>
          <button
            className="bg-stone-600 px-2 mr-1 text-white font-bold rounded-lg hover:bg-stone-700"
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 rounded-lg hover:bg-red-700 px-2 font-bold text-white"
            onClick={() => handleDelete(todo)}
          >
            {" "}
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
