import { useSelector } from "react-redux";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductFull from "./Pages/ProductFull";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import Navbar from "./components/Navbar/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/success" element={<Success />} />
        {/* <Route path="/products" element={<ProductList />} /> */}
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductFull />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/login"
          element={user !== null ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={user !== null ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
