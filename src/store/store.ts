import { create } from "zustand";
import { Task, TaskStatus } from "./types";
import { devtools, persist } from "zustand/middleware";

export type StoreState = {
  tasks: Array<Task>;
  getSpecificTasks: (status: TaskStatus) => Array<Task>;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, status: TaskStatus) => void;
};

const useTaskStore = create<
  StoreState,
  [["zustand/devtools", StoreState], ["zustand/persist", StoreState]]
>(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        getSpecificTasks: (status) =>
          get().tasks.filter((task) => task.status === status),
        addTask: (task) => {
          set((store) => ({ tasks: [...store.tasks, task] }));
        },
        deleteTask: (id) =>
          set((store) => ({
            tasks: store.tasks.filter((task) => task.id !== id),
          })),
        moveTask: (id, status) =>
          set((store) => ({
            tasks: store.tasks.map((task) => {
              if (task.id !== id) return task;
              return { ...task, status };
            }),
          })),
      }),
      { name: "Task-Manager" }
    )
  )
);

export { useTaskStore };
