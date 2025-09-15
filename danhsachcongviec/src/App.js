import React, { useState } from "react";


function TaskItem({ task }) {
  return (
    <li className="p-2 border-b">
      {task}
    </li>
  );
}


export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Danh sách công việc</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nhập công việc"
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Thêm
        </button>
      </div>

      <ul className="bg-gray-100 rounded">
        {tasks.map((t, index) => (
          <TaskItem key={index} task={t} />
        ))}
      </ul>
    </div>
  );
}
