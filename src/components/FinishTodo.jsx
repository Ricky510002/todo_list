import React from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const FinishTodo = (props) => {
  const{todos,onClickBack} = props;
  return (
    <div className="finishArea">
      <h2>Done</h2>
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
                <ArrowUpwardIcon/>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
