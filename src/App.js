import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import the views
import Home from "./views/Home";


import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import AllTours from "./views/AllTours";
import ShopCart from "./views/ShopCart";
// import component (view partials)
import NavMain from "./components/NavMain";
import Footer from "./components/Footer";
//test

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/all-tours" component={AllTours} />
        <Route path="/shop-cart" component={ShopCart} />
        {/* <Route path="/create-tour" component={CreateTour} /> */}
        {/* <Route path="/manage-tour" component={ManageTour} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
