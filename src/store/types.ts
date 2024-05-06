export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};
export type TaskStatus = "planned" | "ongoing" | "done";
