import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound404 from "./views/NotFound404";
import { useState } from "react"

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
import Tour from "./views/Tour"

// auth
import { useAuth } from "./auth/useAuth";
import UserContext from "./auth/UserContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";


const App = function App(props) {
  const { isLoading } = useAuth();
  const [currentUser, setCurrentUser] = useState({});

  const UserContextValue = {
    currentUser,
    setCurrentUser
  };

  return (
    <div className="App">
      <UserContext.Provider value={UserContextValue}>
        {isLoading ? (
          null
        ) : (
            <React.Fragment>
              <NavMain />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/all-tours" component={AllTours} />
                <Route path="/shopcart" component={ShopCart} />
                <ProtectedRoute path="/create-tour" component={CreateTour} />
                <ProtectedRoute path="/manage-tour" component={ManageTour} />
                <Route path="/edit-tour/:id" component={EditTour} />
                <Route path="/tours/:id" component={Tour} />
                <Route path="/*" component={NotFound404} />
              </Switch>
              <Footer />
            </React.Fragment>
          )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
