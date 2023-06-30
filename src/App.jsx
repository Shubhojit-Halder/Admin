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
      </Routes>
    </Router>
  );
};

export default App;
