import React, { useState } from "react";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { FinishTodo } from "./components/FinishTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState([]);
  const [finishTodos, setFinshTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // 初めからあるtodoと新しく入力されたtodoの配列同士の結合（スプレッド構文）
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    alert("本当に削除しますか？");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const onClickComplete = (index) => {
    // NewTodosから削除
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    const newFinshTodos = [...finishTodos, todos[index]];
    setTodos(newTodos);
    setFinshTodos(newFinshTodos);
  };
  const onClickBack = (index) => {
    const newFinshTodos = [...finishTodos];
    newFinshTodos.splice(index, 1);

    const newTodos = [...todos, finishTodos[index]];
    setTodos(newTodos);
    setFinshTodos(newFinshTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <TodoList
        todos={todos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <FinishTodo
        todos={finishTodos}
        onClickBack={onClickBack}
      />
    </>
  );
};
