import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// Pages
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/signIn" component={SignInPage} />
      <Route path="/signUp" component={SignUpPage} />
    </div>
  </BrowserRouter>
);

export default routes;