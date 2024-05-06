import { FC } from "react";
import Task from "./Task";
import { useTaskStore } from "../../store/store";
import { TaskStatus } from "../../store/types";
// import { shallow } from "zustand/shallow";
interface Props {
  state: TaskStatus;
}
const Column: FC<Props> = ({ state }) => {
  const tasks = useTaskStore((store) => store.getSpecificTasks(state));
  console.warn(tasks);
  return (
    <div className="bg-gray-700 min-h-[20rem] text-white w-1/3 max-w-[20rem] m-0 mr-[1rem] p-1.5 gap-1 flex flex-col">
      <p className="w-full text-center bg-purple-700 rounded-md">
        {state.toUpperCase()}
      </p>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default Column;
