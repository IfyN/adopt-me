import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    // <div>
    //   <h1> Adopt me</h1>
    //   <Pet name="luna" animal="dog" breed="Havanese" />
    //   <Pet name="Pookie" animal="hamster" breed="rodent" />
    //   <Pet name="Gol" animal="bird" breed="Parrot" />
    // </div>
    <SearchParams />
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
