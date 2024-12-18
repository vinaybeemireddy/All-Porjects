import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Counter from "./components/Counter";
// import TodoList from "./components/TodoList";
import MainRoutes from "./pages/MainRoutes";
import HomePage from "./pages/HomePage";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <Counter />
      <TodoList /> */}
      <MainRoutes />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
