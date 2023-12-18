import React from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route to="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
