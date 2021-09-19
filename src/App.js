import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import SecondPage from "./components/SecondPage";
import HomeSection from "./components/HomeSection";
import "tailwindcss/tailwind.css";
import Delivery from "./components/Desktop3/Delivery";
import Basket from "./components/Desktop4/Basket";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route component={Header} exact path="/" />
        <Route component={HomeSection} exact path="/home-section" />
        <Route component={secondPage} exact path="/second-page" />
      </Switch> */}
      {/* <Header /> */}
      <Switch>
        <Route component={SecondPage} exact path="/second-page" />
        <Route component={Delivery} exact path="/delivery" />
        <Route component={Basket} exact path="/basket" />
        <Route component={HomeSection} />
        {/* <Route component={secondPage} exact path="/second1" /> */}
      </Switch>
    </div>
  );
}

export default App;
