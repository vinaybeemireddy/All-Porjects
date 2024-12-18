import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const test_function = () => {
    console.log("clicked hello");
  };
  return (
    <div className="App">
      <Button
        children={"bye"}
        size={"large"}
        color={"red"}
        func={test_function}
      />
      <Button
        children={"hello"}
        size={"large"}
        color={"red"}
        func={test_function}
      />
      <Button
        children={"flm"}
        size={"large"}
        color={"red"}
        func={test_function}
      />
      <Counter />
    </div>
  );
}

export default App;
