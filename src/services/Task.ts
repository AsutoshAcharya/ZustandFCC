import axios from "axios";
import apiPromise, { INSTANCE_CONFIG } from "../axios/apiPromise";
let instance = axios.create(INSTANCE_CONFIG);

export default class Task {
  static addTask(values: Dict) {
    return apiPromise(instance, () =>
      instance.post("/tasks/addTask", values.data)
    );
  }

  static getTasks(values: Dict) {
    return apiPromise(instance, () => instance.get("/tasks/getTasks"));
  }
  static deleteTask(values: Dict) {
    return apiPromise(instance, () =>
      instance.delete("/tasks/delete/" + values.taskId)
    );
  }
}
