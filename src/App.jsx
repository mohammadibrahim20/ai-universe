import "./App.css";
import Buttun from "./components/Header/Button/Buttun";
import Cart from "./components/Header/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
 


  return (
    <div className="App">
      <Header></Header>
      <Buttun>Sort by date</Buttun>
      <Cart></Cart>

    </div>
  );
}

export default App;
