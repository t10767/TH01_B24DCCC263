import React, { useState } from "react";


function Display({ value }) {
  return (
    <div style={{ fontSize: "24px", margin: "20px" }}>
      Giá trị hiện tại: {value}
    </div>
  );
}


function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Display value={count} />
      <button onClick={() => setCount(count - 1)} style={{ fontSize: "20px", margin: "5px" }}>
        -
      </button>
      <button onClick={() => setCount(count + 1)} style={{ fontSize: "20px", margin: "5px" }}>
        +
      </button>
    </div>
  );
}

export default CounterApp;
