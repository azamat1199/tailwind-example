import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/SecondPage";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";
import secondPage from "./components/SecondPage";

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
      </Switch>

      {/* <HomeSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
