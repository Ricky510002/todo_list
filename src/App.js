import React from "react";
import "./App.css";
import { Todo } from "./Todo";
import "firebase/firestore";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const App = () => {
  const [user] = useAuthState(auth);

  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="app">
      {/* {user ? (
        <CreateTodo />
      ) : (
        <button onClick={signIn} className="sign_in">
          Sign up
        </button>
      )} */}

      {user ? (
        <Todo />
      ) : (
        <button onClick={signIn} className="sign_in">
          Login
        </button>
      )}
    </div>
  );
};
