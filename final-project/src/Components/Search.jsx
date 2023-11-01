import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import P1 from './Pages/Productpages/P1'
import P2 from './Pages/Productpages/P2'
import P3 from './Pages/Productpages/P3'
import P4 from './Pages/Productpages/P4'
import P5 from './Pages/Productpages/P5'
import P6 from './Pages/Productpages/P6'
import Home from "./Pages/HomePage"

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "THANOS CRASH GUARD") {
      return <Navigate replace to="/P1" />;
    } else if (inputValue === "AVIATOR SADDLE STAY") {
      return <Navigate replace="/P2" />;
    }
    else if (inputValue === " VOYAGER BASHPLATE") {
      return <Navigate replace="/P3" />;
    }
    else if (inputValue === "ARMOUR JACKET") {
      return <Navigate replace="/P4" />;
    }
    else if (inputValue === "BUMPER BAG") {
      return <Navigate replace="/P5" />;
    }
    else if (inputValue === " HEAD COVER") {
      return <Navigate replace="/P6" />;
    } else {
      return <Navigate replace="/" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/P1" component={P1} />
        <Route exact path="/P2" component={P2} />
        <Route exact path="/P3" component={P3} />
        <Route exact path="/P4" component={P4} />
        <Route exact path="/P5" component={P5} />
        <Route exact path="/P6" component={P6} />
        <Navigate replace to="/" />
      </Routes>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Router>
  );
}
export default App
