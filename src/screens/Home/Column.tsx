import { FC, DragEvent, Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";

//local imports

import Task from "./Task";
import { useTaskStore } from "../../store/store";
import { TaskStatus } from "../../store/types";
import { apiCall } from "../../helpers/index";
import { Task as TaskService } from "../../services/index";
// import { shallow } from "zustand/shallow";
interface Props {
  state: TaskStatus;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}
const Column: FC<Props> = ({ state, id, setId }) => {
  const { getSpecificTasks } = useTaskStore();
  const client = useQueryClient();
  return (
    <div
      className="bg-gray-700 min-h-[20rem] text-white w-1/3 max-w-[20rem] m-0 mr-[1rem] p-1.5 gap-1 flex flex-col"
      onDragOver={(e: DragEvent) => {
        e.preventDefault();
      }}
      onDrop={() => {
        if (id !== "") {
          apiCall({
            fn: () =>
              TaskService.moveTask({ data: { taskId: id, status: state } }),
            onSuccess: () => {
              client.invalidateQueries(["get-all-tasks"]);
              setId("");
            },
          });
        }
      }}
    >
      <p className="w-full text-center bg-purple-700 rounded-md">
        {state.toUpperCase()}
      </p>
      {getSpecificTasks(state).map((task) => (
        <Task
          key={task.id}
          task={task}
          onDragStart={() => {
            setId(task.id);
          }}
        />
      ))}
    </div>
  );
};

export default Column;
