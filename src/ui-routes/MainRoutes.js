import React from "react";
import { Route, Redirect } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";

const Landing = Loadable({
  loader: () => import("../ui-pages/Landing"),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import("../ui-pages/Login"),
  loading: Loading,
});


const MainRoutes = () => {
  return (
    <div>
      <Route path="/user-home" component={Landing} />
      <Route path="/login" component={Login} />
      <Redirect to="/user-home/register" />
    </div>
  );
};

export default MainRoutes;
