import { create } from "zustand";
import { Task, TaskStatus } from "./types";
import { devtools } from "zustand/middleware";

export type StoreState = {
  tasks: Array<Task>;
  getSpecificTasks: (status: TaskStatus) => Array<Task>;
  addTask: (task: Task) => void;
};

const useTaskStore = create<StoreState, [["zustand/devtools", StoreState]]>(
  devtools((set, get) => ({
    tasks: [{ title: "learn zustand", status: "planned", id: "2.3232" }],
    getSpecificTasks: (status) =>
      get().tasks.filter((task) => task.status === status),
    addTask: (task) => {
      set((store) => ({ tasks: [...store.tasks, task] }));
    },
  }))
);

export { useTaskStore };
