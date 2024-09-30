import { useState } from "react";

const Item = ({ id, name, finished }) => {
  const [completed, setCompleted] = useState(finished);

  return (
    <div style={{ padding: "5px" }}>
      <li
        key={id}
        style={{
          backgroundColor: "#f0f0f0",
          display: "inline",
          marginRight: "5px",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {name}
      </li>
      <button
        onClick={() => {
          setCompleted(!completed);
        }}
      >
        {completed ? "✅️" : "❌"}
      </button>
    </div>
  );
};

export default Item;
