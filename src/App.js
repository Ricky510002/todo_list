import React, { useState } from "react";
import "./App.css";

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
      <div className="inputArea">
        <input
          id="addText"
          placeholder="TODOを入力"
          type="text"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="listArea">
        <h2>TODOリスト</h2>
        <ul id="todoList">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="listLow">
                <p>{todo}</p>
                {/* 引数を渡したい時はアロー関数にする */}
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="finishArea">
        <h2>終わったこと</h2>
        <ul id="finishList">
          {finishTodos.map((finishTodo, index) => {
            return (
              <li key={index} className="listLow">
                <p>{finishTodo}</p>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
