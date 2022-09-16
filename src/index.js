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
  LocalWeather,
  Posts,
  Post,
  Login,
} from "./components";
import 'bootstrap/dist/css/bootstrap.css';

const user = localStorage.getItem("token");

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      {user && <Route path="/" exact element={<Home />} />}
      <Route path="/PlantPlanner" exact element={<Home />} />
			<Route path="/NewUser" exact element={<NewUser />} />
			<Route path="/Login" exact element={<Login />} />
			<Route path="/Home" element={<Navigate replace to="/Home" />} />
      <Route path="/NewPlant" element={<NewPlant />} />
      <Route path="/Plants" element={<Plants />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
      <Route path="/LocalWeather" element={<LocalWeather />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();