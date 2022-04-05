import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havaniel" />
      <Pet name="Fru" animal="Cat" breed="Gual" />
      <Pet name="Gol" animal="Bird" breed="Chicken" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
