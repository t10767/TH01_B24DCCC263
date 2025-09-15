import React, { useState } from "react";

function Box({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        borderRadius: "10px",
        border: "2px solid black",
        margin: "20px auto"
      }}
    ></div>
  );
}

function App() {
  const colors = ["red", "green", "blue", "yellow"];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Ứng dụng đổi màu nền</h2>
      <Box color={colors[index]} />
      <button onClick={changeColor}>Đổi màu</button>
      <div style={{ marginTop: "10px" }}>
        <strong>Màu hiện tại:</strong> {colors[index]}
      </div>
    </div>
  );
}

export default App;
