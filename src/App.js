import "./styles.css";
import "./App.css";
import { draw } from "./components/canvas.js";

export default function App() {
  return (
    <div className="App">
      <div id="sketch">
        <canvas id="paint"></canvas>
      </div>
    </div>
  );
}
