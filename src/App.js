import React from "react";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
