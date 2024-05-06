import { create } from "zustand";
import { Task, TaskStatus } from "./types";
import { devtools } from "zustand/middleware";

export type StoreState = {
  tasks: Array<Task>;
  getSpecificTasks: (status: TaskStatus) => Array<Task>;
};

const useTaskStore = create<StoreState, [["zustand/devtools", StoreState]]>(
  devtools((set, get) => ({
    tasks: [{ title: "learn zustand", status: "planned" }],
    getSpecificTasks: (status) =>
      get().tasks.filter((task) => task.status === status),
  }))
);

export { useTaskStore };
