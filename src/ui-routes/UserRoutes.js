import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";


const Dashboard = Loadable({
  loader: () => import("../ui-pages/Landing/Components/Dashboard"),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import("../ui-pages/Register"),
  loading: Loading
});

const UserRoutes = () => {
  return (
    <div>
      <Route path="/user-home/dashboard" component={Dashboard} />
      <Route path="/user-home/register" component={Register} />
    </div>
  );
};

export default UserRoutes;
