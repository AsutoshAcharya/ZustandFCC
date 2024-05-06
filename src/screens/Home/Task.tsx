import { FC } from "react";
interface Props {
  title: string;
}
const Task: FC<Props> = ({ title }) => {
  return (
    <div className=" bg-white text-black rounded min-h-[5rem] p-1 break-words">
      {title}
    </div>
  );
};

export default Task;
{
}
