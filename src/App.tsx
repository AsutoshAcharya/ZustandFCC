//local imports
import "./index.css";
import ReactQuery from "./ReactQuery";
import Home from "./screens/Home";

export const statuses = ["planned", "ongoing", "done"];

function App() {
  return (
    <ReactQuery>
      <Home />
    </ReactQuery>
  );
}

export default App;
