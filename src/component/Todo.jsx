import { useEffect, useState } from "react";
import Item from "./Item";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [values, setValues] = useState("");
  // const [edit, setEdit] = useState("");
  const [itemsLeft, setItemsLeft] = useState(0);

  // setItemsLeft(todo.length);
  const clickFunc = (e) => {
    if (e.target.value === "") {
      return null;
    } else {
      if (e.key === "Enter") {
        setTodo([...todo, e.target.value]);
        setValues("");
      }
    }
  };
  const changeFunc = (e) => {
    setValues(e.target.value);
    todo.forEach((element) => {
      if (element === values) {
        return null;
      }
    });
  };

  const cancelFunc = (idx) => {
    const newTodo = todo.filter((element, id) => {
      return id !== idx && element;
    });

    setTodo(newTodo);
  };

  useEffect(() => {
    setItemsLeft(todo.length);
  }, [todo]);

  return (
    <main className="main-todo">
      <div className="input-div">
        <input
          type="text"
          placeholder="Create a new todo..."
          onKeyUp={clickFunc}
          onChange={changeFunc}
          value={values}
        />
      </div>
      <div>
        {todo.map((element, idx, arr) => {
          return (
            <Item text={element} key={idx} cancel={() => cancelFunc(idx)} />
          );
        })}
      </div>
      <div className="footer-div">
        <p>
          {itemsLeft} item{itemsLeft === 1 ? "" : "s"} left
        </p>
      </div>
    </main>
  );
};

export default Todo;
