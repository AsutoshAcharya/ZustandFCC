import { FormEvent, useState } from "react";
import { statuses } from "../../App";
import Column from "./Column";
import { TaskStatus } from "../../store/types";
import { apiCall } from "../../helpers/index";
import { Task } from "../../services/index";
const Home = () => {
  const [task, setTask] = useState<string>("");
  const [id, setId] = useState<string>("");
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const apiData = {
      data: { title: task, status: "planned" },
    };
    apiCall({
      fn: () => Task.addTask(apiData),
      onSuccess: (resp) => {
        console.log(resp);
        setTask("");
      },
      onError: () => {},
    });
  }
  return (
    <div className="flex flex-col w-screen h-screen font-sans bg-slate-500">
      <form
        className="flex content-center justify-center w-full gap-2 p-2"
        onSubmit={(e: FormEvent) => handleSubmit(e)}
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
        {statuses.map((status) => (
          <Column
            key={status}
            state={status as TaskStatus}
            id={id}
            setId={setId}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
