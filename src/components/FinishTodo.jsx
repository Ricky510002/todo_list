import React from "react";

export const FinishTodo = (props) => {
  const{todos,onClickBack} = props;
  return (
    <div className="finishArea">
      <h2>終わったこと</h2>
      <ul id="finishList">
        {todos.map((finishTodo, index) => {
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
  );
};
