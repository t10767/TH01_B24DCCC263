import React, { useState } from "react";


function StudentCard({ name, age, className }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div style={{ border: "1px solid gray", borderRadius: "8px", padding: "16px", margin: "10px" }}>
      <h2>{name}</h2>
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {showDetail && (
        <div style={{ marginTop: "10px" }}>
          <p>Tuổi: {age}</p>
          <p>Lớp: {className}</p>
        </div>
      )}
    </div>
  );
}


function App() {
  const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, className: "CNTT1" },
    { id: 2, name: "Trần Thị B", age: 21, className: "CNTT2" },
    { id: 3, name: "Lê Văn C", age: 19, className: "CNTT3" },
  ];

  return (
    <div>
      <h1>Thông tin sinh viên</h1>
      {students.map((sv) => (
        <StudentCard
          key={sv.id}
          name={sv.name}
          age={sv.age}
          className={sv.className}
        />
      ))}
    </div>
  );
}

export default App;
