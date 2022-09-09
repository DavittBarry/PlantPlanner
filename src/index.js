import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  NewUser,
  NewPlant,
  Plants,
  Posts,
  Post,
  Login,
} from "./components";

const user = localStorage.getItem("token");

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      {user && <Route path="/" exact element={<Home />} />}
			<Route path="/NewUser" exact element={<NewUser />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/NewPlant" element={<NewPlant />} />
      <Route path="/Plants" element={<Plants />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();