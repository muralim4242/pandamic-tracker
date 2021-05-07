import React from "react";
import { Route, Redirect } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";
const Landing = Loadable({
  loader: () => import("../ui-pages/Landing"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("../ui-pages/Login"),
  loading: Loading
});

const Register = Loadable({
  loader: () => import("../ui-pages/Register"),
  loading: Loading
});

const MainRoutes = () => {
  return (
    <div>
      <Route path="/user-home" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/login" />
    </div>
  )
}

export default MainRoutes;
