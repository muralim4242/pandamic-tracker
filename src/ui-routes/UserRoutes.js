import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";


const Dashboard = Loadable({
  loader: () => import("../ui-pages/Landing/Components/Dashboard"),
  loading: Loading,
});

const TransportRegister = Loadable({
  loader: () => import("../ui-pages/Landing/Components/TransportRegister"),
  loading: Loading
});

const UserRoutes = () => {
  return (
    <div>
      <Route path="/user-home/dashboard" component={Dashboard} />
      <Route path="/user-home/transport-register" component={TransportRegister} />
    </div>
  );
};

export default UserRoutes;
