import { Todo } from "./model";

export interface ContextType {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleAdd: (e: React.FormEvent<Element>) => void;
}
