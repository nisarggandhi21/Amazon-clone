import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  //useEffect
  //code which runs baased on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is loggd in..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup opeartion goes here
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Switch>
        {/* Checkout Route */}
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        {/* Login Route */}
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        {/* Default Route */}
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
