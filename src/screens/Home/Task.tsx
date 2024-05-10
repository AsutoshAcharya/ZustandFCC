import { FC, HTMLAttributes } from "react";
import { useQueryClient } from "@tanstack/react-query";

//local imports
// import { statuses } from "../../App";
// import { useTaskStore } from "../../store/store";
import { Task as SingleTask } from "../../store/types";
import { Task as TaskService } from "../../services/index";
import { apiCall } from "../../helpers/index";

interface Props extends HTMLAttributes<HTMLDivElement> {
  task: SingleTask;
}
const Task: FC<Props> = ({ task, ...rest }) => {
  const client = useQueryClient();

  function deleteTask(id: string) {
    apiCall({
      fn: () => TaskService.deleteTask({ taskId: id }),
      onSuccess: () => {
        client.invalidateQueries(["get-all-tasks"]);
      },
      onError: (d) => console.log(d),
    });
  }
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
