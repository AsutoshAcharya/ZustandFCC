export type Task = {
  title: string;
  status: TaskStatus;
};
export type TaskStatus = "planned" | "ongoing" | "done";
