import { create } from "zustand";
import { Task, TaskStatus } from "./types";
import { devtools } from "zustand/middleware";

export type StoreState = {
  tasks: Array<Task>;
  getSpecificTasks: (status: TaskStatus) => Array<Task>;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, status: TaskStatus) => void;
};

const useTaskStore = create<StoreState, [["zustand/devtools", StoreState]]>(
  devtools((set, get) => ({
    tasks: [{ title: "learn zustand", status: "planned", id: "2.3232" }],
    getSpecificTasks: (status) =>
      get().tasks.filter((task) => task.status === status),
    addTask: (task) => {
      set((store) => ({ tasks: [...store.tasks, task] }));
    },
    deleteTask: (id) =>
      set((store) => ({ tasks: store.tasks.filter((task) => task.id !== id) })),
    moveTask: (id, status) =>
      set((store) => ({
        tasks: store.tasks.map((task) => {
          if (task.id !== id) return task;
          return { ...task, status };
        }),
      })),
  }))
);

export { useTaskStore };
