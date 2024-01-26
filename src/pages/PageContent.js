import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ProductPage from "../pages/ProductPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "./LoginPage";

export default function PageContent() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/product" exact>
          <ProductPage />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}
