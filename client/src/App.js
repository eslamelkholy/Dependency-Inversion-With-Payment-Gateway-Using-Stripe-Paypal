import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route key="home" exact path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
