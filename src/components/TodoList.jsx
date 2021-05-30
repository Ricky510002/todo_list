import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

export const TodoList = (props) => {
  const { todos, onClickComplete, onClickDelete, name } = props;

  return (
    <div className="listArea">
      <h2>{name}'s Todo List</h2> 
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
               <DoneIcon/>
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
              <DeleteIcon/>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
