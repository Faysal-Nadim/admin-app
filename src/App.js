import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { Home } from "./containers/Home";
import { Signin } from "./containers/Signin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions";
import { Orders } from "./containers/Orders/Order";
import { FreightCategory } from "./containers/Freight/ShowFreight";
import { Request } from "./containers/Requests/Request";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<PrivateRoute> {<Home />} </PrivateRoute>}
          />
          <Route
            path="/requests"
            element={<PrivateRoute> {<Request />} </PrivateRoute>}
          />
          <Route
            path="/orders"
            element={<PrivateRoute> {<Orders />} </PrivateRoute>}
          />
          <Route
            path="/freights"
            element={<PrivateRoute> {<FreightCategory />} </PrivateRoute>}
          />
          {/* <Route path="/freights/:_id" element={<PrivateRoute> {<EditFreight />} </PrivateRoute>} /> */}

          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
