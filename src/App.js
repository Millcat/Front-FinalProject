import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import the views
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import AllTours from "./views/AllTours";
import ShopCart from "./views/ShopCart";
import NavMain from "./components/NavMain";
import Footer from "./components/Footer";
import CreateTour from "./views/CreateTour";
import ManageTour from "./views/ManageTour";
import EditTour from "./views/EditTour";
<<<<<<< HEAD
import Tour from "./views/Tour"
=======
import NotFound404 from "./views/NotFound404";
>>>>>>> 63ea4578fb8d822115b0a768842eb087595f1017

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/all-tours" component={AllTours} />
        <Route path="/shopcart" component={ShopCart} />
        <Route path="/create-tour" component={CreateTour} />
        <Route path="/manage-tour" component={ManageTour} />
        <Route path="/edit-tour/:id" component={EditTour} />
<<<<<<< HEAD
        <Route path="/tours/:id" component={Tour} />
=======
        <Route path="/*" component={NotFound404} />
>>>>>>> 63ea4578fb8d822115b0a768842eb087595f1017
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
