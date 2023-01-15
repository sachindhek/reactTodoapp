import React from "react";
import "./style.css";
import SingleTodo from "./SingleTodo";
import { useContext } from "react";
import { TodoContextType } from "./SendDataList";

// interface Props {
//   todos: Todo[];
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }

const TodoList: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContextType);
  return (
    <div className="container">
      <div className="todos">
        <span className="todos-heading">Active Tasks</span>
        {todos.map((todo, index) => (
          <SingleTodo
            index={index}
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
// <div className="todos">
//   {todos.map((todo) => (
//     <SingleTodo
//       todo={todo}
//       key={todo.id}
//       todos={todos}
//       setTodos={setTodos}
//     />
//   ))}
// </div>
