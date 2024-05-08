import axios from "axios";
import apiPromise, { INSTANCE_CONFIG } from "../axios/apiPromise";
let instance = axios.create(INSTANCE_CONFIG);

export default class Task {
  static addTask(values: Dict) {
    return apiPromise(instance, () =>
      instance.post("/tasks/addTask", values.data)
    );
  }
}
