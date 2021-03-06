import React, { useState, useEffect } from "react";
import "./Todo.css";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { FinishTodo } from "./components/FinishTodo";
import firebase from 'firebase'; 
import 'firebase/firestore'; 
import { auth } from "./firebase";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState([]);
  const [finishTodos, setFinishTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const db = firebase.firestore(); 
  // 現在ログインしている人の情報を取得
  const user = firebase.auth().currentUser;

  // Loadingを判定する変数
  const [isLoading, setIsLoading] = useState(true);
  // 未完了のTodoが変化したかを監視する変数
  const [isChangedTodo, setIsChangedTodo] = useState(false);
  // 完了済みのTodoが変化したかを監視する変数
  const [isChangedFinished, setIsChangedFinished] = useState(false);

  useEffect(() => {
    (async () => {
      const resTodo = await db.collection(user.uid).doc("todo").get();
      // stateに入れる
      
      if(resTodo.data() === undefined){
        await db.collection(user.uid).doc('finishTodo').set({
          tasks: finishTodos,
        });
  
        await db.collection(user.uid).doc('todo').set({
          tasks: todos,
        });
      } else{
        setTodos(resTodo.data().tasks);
      }
     
      const resFinishedTodo = await db.collection(user.uid).doc("finishTodo").get();

      // stateに入れる
      if(resTodo.data() === undefined){
        await db.collection(user.uid).doc('finishTodo').set({
          tasks: finishTodos,
        });
  
        await db.collection(user.uid).doc('todo').set({
          tasks: todos,
        });
      } else{
        setFinishTodos(resFinishedTodo.data().tasks);
      }
     
      // Loading終了
      setIsLoading(false);
    })()
  }, [db])

  useEffect(() => {
    if (isChangedTodo) {
      (async () => {

        // 通信をするのでLoadingをtrue
        setIsLoading(true)
        
        await db.collection(user.uid).doc('finishTodo').set({
          tasks: finishTodos,
        });

        await db.collection(user.uid).doc('todo').set({
          tasks: todos,
        });

        const docRef = await db.collection(user.uid).doc('todo');
        docRef.update({ tasks: todos })
        // Loading終了
        setIsLoading(false)
      })()
    }
  }, [todos, isChangedTodo, db])

  useEffect(() => {
    if (isChangedFinished) {
      (async () => {
        // 通信をするのでLoadingをtrue
        setIsLoading(true)
        const docRef = await db.collection(user.uid).doc('finishTodo');
        docRef.update({ tasks: finishTodos })
        // Loading終了
        setIsLoading(false)
      })()
    }
    setIsChangedFinished(false)
  }, [db, finishTodos, isChangedFinished])




  const onClickAdd = async() => {
    if (todoText === "") return;
    //Todoが変化したのでtrue
    setIsChangedTodo(true);
    // 初めからあるtodoと新しく入力されたtodoの配列同士の結合（スプレッド構文）
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // 追記 Todoが変化したのでtrue
    setIsChangedTodo(true);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const onClickComplete = (index) => {
    // 追記 Todo、完了済みTodoがともに変化したのでtrue
    setIsChangedTodo(true);
    setIsChangedFinished(true);

    // NewTodosから削除
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    const newFinshTodos = [...finishTodos, todos[index]];
    setTodos(newTodos);
    setFinishTodos(newFinshTodos);
  };
  const onClickBack = (index) => {
    // 追記 Todo、完了済みTodoがともに変化したのでtrue
    setIsChangedTodo(true);
    setIsChangedFinished(true);

    const newFinshTodos = [...finishTodos];
    newFinshTodos.splice(index, 1);

    const newTodos = [...todos, finishTodos[index]];
    setTodos(newTodos);
    setFinishTodos(newFinshTodos);
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
        name={user.displayName}
      />
      <FinishTodo todos={finishTodos} onClickBack={onClickBack} />

      <button onClick={()=>{auth.signOut()}} className="sign_out">Sign Out</button>
    </>
  );
};
