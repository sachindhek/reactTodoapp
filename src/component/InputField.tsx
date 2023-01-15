import React, { useRef, useContext } from "react";
import { TodoContextType } from "./SendDataList";

import "./style.css";

// interface Props {
//   todo: string;
//   setTodo: React.Dispatch<React.SetStateAction<string>>;
//   handleAdd: (e: React.FormEvent) => void;
// }
const InputField: React.FC = () => {
  const { todo, setTodo, handleAdd } = useContext(TodoContextType);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Todo"
        className="input-box"
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
