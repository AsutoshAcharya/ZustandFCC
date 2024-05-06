//local imports
import "./App.css";
import "./index.css";
import Column from "./screens/Home/Column";

const states = ["PLANNED", "ONGOING", "DONE"];

function App() {
  return (
    <div className="flex content-center justify-center w-screen h-screen font-sans bg-slate-500">
      {states.map((state) => (
        <Column key={state} state={state} />
      ))}
    </div>
  );
}

export default App;
