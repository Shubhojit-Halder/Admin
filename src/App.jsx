import { useSelector } from "react-redux";
import Home from "./Pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Login from "./Pages/Login";
import SingleOrder from "./components/OrderPage/SingleOrder";
import AllUsers from "./Pages/AllUsers";
import AllOrders from "./Pages/AllOrders";
import AllProducts from "./Pages/AllProducts";
import AddProduct from "./Pages/AddProduct";
import UpdateProducts from "./Pages/UpdateProducts";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            user !== null && user.isAdmin ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route
          exact
          path="/login"
          element={
            user !== null && user.isAdmin ? <Navigate to="/" /> : <Login />
          }
        />
        <Route
          exact
          path="/order/:id"
          element={
            user !== null && user.isAdmin ? <SingleOrder /> : <Navigate to="/login" />
          }
        />
        <Route
          exact
          path="/users"
          element={
            user !== null && user.isAdmin ? <AllUsers/> : <Navigate to="/login" />
          }
        />
        <Route
          exact
          path="/orders"
          element={
            user !== null && user.isAdmin ? <AllOrders/> : <Navigate to="/login" />
          }
        />
        <Route
          exact
          path="/products"
          element={
            user !== null && user.isAdmin ? <AllProducts/> : <Navigate to="/login" />
          }
        />
        <Route
          exact
          path="/product/add"
          element={
            user !== null && user.isAdmin ? <AddProduct/> : <Navigate to="/login" />
          }
        />
        <Route
          exact
          path="/product/:id"
          element={
            user !== null && user.isAdmin ? <UpdateProducts/> : <Navigate to="/login" />
          }
        />
      </Routes>
      
    </Router>
  );
};

export default App;
