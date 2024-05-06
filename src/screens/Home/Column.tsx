import { FC } from "react";
import Task from "./Task";
interface Props {
  state: string;
}
const Column: FC<Props> = ({ state }) => {
  return (
    <div className="bg-gray-700 min-h-[20rem] text-white w-1/3 max-w-[20rem] m-0 mr-[1rem] p-1.5 gap-1 flex flex-col">
      <p className="w-full text-center bg-purple-700 rounded-md">{state}</p>
      <Task title="Work on Zustandddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" />
    </div>
  );
};

export default Column;
