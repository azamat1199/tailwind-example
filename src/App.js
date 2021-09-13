import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/SecondPage";
import HomeSection from "./components/HomeSection";
import "tailwindcss/tailwind.css";
import secondPage from "./components/SecondPage";
import Delivery from "./components/Desktop3/Delivery";

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
        <Route component={Header} exact path="/second-header" />
        <Route component={HomeSection} />
        <Route component={secondPage} exact path="/second-page" />
        <Route component={Delivery} exact path="/delivery " />
      </Switch>

      {/* <HomeSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
