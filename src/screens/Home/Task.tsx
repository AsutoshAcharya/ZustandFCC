import { FC } from "react";
import { Task as SingleTask } from "../../store/types";
interface Props {
  task: SingleTask;
}
const Task: FC<Props> = ({ task }) => {
  return (
    <div className=" bg-white text-black rounded min-h-[5rem] p-1 break-words">
      {task.title}
    </div>
  );
};

export default Task;
{
}
