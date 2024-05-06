//local imports
import { useState } from "react";
import "./App.css";
import "./index.css";
import Column from "./screens/Home/Column";
import { TaskStatus } from "./store/types";
import { useTaskStore } from "./store/store";

const states = ["planned", "ongoing", "done"];

function App() {
  const [task, setTask] = useState<string>("");
  const addTaskToStore = useTaskStore((store) => store.addTask);

  return (
    <div className="flex flex-col w-screen h-screen font-sans bg-slate-500">
      <form
        className="flex content-center justify-center w-full gap-2 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTaskToStore({
            id: (Math.random() * 10000).toString(),
            title: task,
            status: "planned",
          });
          setTask("");
        }}
      >
        <input
          type="text"
          className="w-1/3 rounded-md"
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          disabled={task.length === 0}
          className="p-2 text-white bg-purple-500 rounded-md cursor-pointer hover:bg-purple-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Add Task
        </button>
      </form>
      <div className="flex content-center justify-center w-full h-full">
        {states.map((state) => (
          <Column key={state} state={state as TaskStatus} />
        ))}
      </div>
    </div>
  );
}

export default App;
