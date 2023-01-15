import React, { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import { Todo } from "./model";
import { ContextType } from "./ContextType";

export const TodoContextType = React.createContext<ContextType>(
  {} as ContextType
);

const SendDataList: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <TodoContextType.Provider
        value={{ todo, setTodo, handleAdd, todos, setTodos }}
      >
        <InputField />
        <TodoList />
      </TodoContextType.Provider>
    </div>
  );
};

export default SendDataList;
