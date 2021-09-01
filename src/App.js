import "./App.css";
import { useState } from "react";

import FilterFruit from "./components";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <FilterFruit fruits={fruits} setFruits={setFruits} />
      </header>
    </div>
  );
}

export default App;
