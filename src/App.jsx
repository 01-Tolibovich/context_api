import "./App.css";
import { User } from "./components";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Daler");
  return (
    <div className="App">
      <User user={user} />
    </div>
  );
}

export default App;
