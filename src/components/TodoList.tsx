import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos
}: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
        ;
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {completedTodos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={completedTodos}
            key={todo.id}
            setTodos={setCompletedTodos}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default TodoList;
