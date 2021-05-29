import React from "react";
import "./App.css";
import { Todo } from "./Todo.js";
import "firebase/firestore";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const App = () => {
  const [user, loading, error] = useAuthState(auth);

  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="app">
      {user ? (<Todo/>):(<button onClick={signIn} className="sign_in">Sign in</button>)
      }
    </div>
  );
};
