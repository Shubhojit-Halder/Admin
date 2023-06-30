import { useSelector } from "react-redux";
import Home from "./Pages/Home";

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
        <Route exact path="/dashboard" element={<Home />} />

        <Route
          exact
          path="/"
          element={user !== null ? <Login /> : <Navigate to="/dashboard" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
