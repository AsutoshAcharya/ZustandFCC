import { AxiosInstance, AxiosResponse } from "axios";

export const INSTANCE_CONFIG = {
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
};
function apiPromise(
  instance: AxiosInstance,
  request: () => Promise<AxiosResponse>
) {
  return new Promise<Dict>((resolve) =>
    request()
      .then((response) => resolve(response))
      .catch((error) => error)
  );
}

export default apiPromise;
