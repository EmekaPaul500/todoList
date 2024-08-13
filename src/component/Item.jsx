import React, { useState } from "react";

const Item = ({ text, cancel }) => {
  const [confirm, setConfirm] = useState(false);

  const confirmFunc = () => {
    setConfirm(!confirm);
  };

  const style = {
    color: confirm ? "hsla(233, 11%, 84%, 0.4)" : "white",
  };

  return (
    <div className="todo-div">
      <div className="todo-div-div">
        <button className="check-btn" onClick={confirmFunc}>
          <img src={`../images/icon-${confirm && "check"}.svg`} alt="" />
        </button>
      </div>
      <p style={style}>{confirm ? <del>{text}</del> : text}</p>
      <button className="cross-btn" onClick={cancel}>
        <img src="../images/icon-cross.svg" alt="" />
      </button>
    </div>
  );
};

export default Item;
