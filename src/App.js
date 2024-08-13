import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todo from "./component/Todo";

function App() {
  // console.log(confirm);

  return (
    <main>
      <div className="img-div"></div>
      <div>
        <Todo />
      </div>
    </main>
  );
}

export default App;
