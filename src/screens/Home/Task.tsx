import { FC, HTMLAttributes } from "react";
import { Task as SingleTask } from "../../store/types";
// import { statuses } from "../../App";
import { useTaskStore } from "../../store/store";
interface Props extends HTMLAttributes<HTMLDivElement> {
  task: SingleTask;
}
const Task: FC<Props> = ({ task, ...rest }) => {
  const { deleteTask } = useTaskStore();
  return (
    <div
      className="bg-white text-black rounded min-h-[5rem] p-1 break-words flex-col justify-between cursor-grab"
      draggable
      {...rest}
    >
      <div>{task.title}</div>
      {/* <div className="flex content-center justify-end w-full gap-1 p-1">
        {statuses
          .filter((state) => state !== task.status)
          .map((status) => (
            <button
              className="p-1 font-thin text-white bg-purple-500 rounded-md cursor-pointer -2 hover:bg-purple-300"
              onClick={() => moveTask(task.id, status as TaskStatus)}
            >
              Move To {status.toUpperCase()}
            </button>
          ))}
      </div> */}
      <div className="flex content-center justify-end w-full p-1">
        <button
          className="p-1 font-thin text-white bg-red-500 rounded-md hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
{
}
