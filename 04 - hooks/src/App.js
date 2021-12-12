import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Jax" animal="Dog" breed="Corgi" />
      <Pet name="Pickles" animal="Dog" breed="Chihuahua" />
      <Pet name="Duke" animal="Dog" breed="Lab" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
