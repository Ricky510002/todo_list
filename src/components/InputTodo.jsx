import React from "react";

export const InputTodo = (props) => {
  // propsがオブジェクトで渡ってきているので分割代入で取り出し
  const {todoText,onChange,onClick} = props;
  return (
    <div className="inputArea">
      <input
        id="addText"
        placeholder="Add New Task"
        type="text"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};
