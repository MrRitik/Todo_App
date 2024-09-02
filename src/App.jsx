import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className="h-screen bg-slate-600">
      <center className="pt-14">
        <div className="bg-orange-400 w-[28rem] h-[80vh] overflow-y-auto shadow-2xl rounded-2xl sm:w-[33rem]">
          <Header />
          <Input
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
          <Task todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </center>
    </div>
  );
};

export default App;
