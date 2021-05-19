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
const Shop_register = Loadable({
  loader: () => import("../ui-pages/Landing/Components/Shop_register"),
  loading: Loading
});

const UserRoutes = () => {
  return (
    <div>
      <Route path="/user-home/dashboard" component={Dashboard} />
      <Route path="/user-home/transport-register" component={TransportRegister} />
      <Route path="/user-home/shop_register" component={Shop_register} />

    </div>
  );
};

export default UserRoutes;
