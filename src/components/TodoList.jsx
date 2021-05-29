import React from "react";

export const TodoList = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="listArea">
      <h2>Todo List</h2>
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
  );
};
