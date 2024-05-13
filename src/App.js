import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Shop from "./Component/Shop/Shop/Shop";
import Login from "./Component/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import AddServiceAndOffer from "./Component/Admin/AddServiceAndOffer/AddServiceAndOffer";
import Review from "./Component/Admin/Review/Review";
import MakeAdmin from "./Component/Admin/MakeAdmin/MakeAdmin";
import Dashboard from "./Component/Admin/Dashboard/Dashboard";
import Checkout from "./Component/Shop/Checkout/Checkout";
import AllOrder from "./Component/Admin/AllOrder/AllOrder";
import ManageServiceAndProduct from "./Component/Admin/ManageService&Product/ManageServiceAndProduct";
import Appointment from "./Component/Appointment/Appointment/Appointment";
import Offers from "./Component/Offers/Offers/Offers";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shop">
            <Shop></Shop>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allOrder">
            <AllOrder></AllOrder>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageServiceAndProduct></ManageServiceAndProduct>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/offer">
            <Offers></Offers>
          </PrivateRoute>
          <PrivateRoute path="/addServiceAndOffer">
            <AddServiceAndOffer></AddServiceAndOffer>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
