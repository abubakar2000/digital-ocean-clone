import React from "react";
// import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import "./App.css";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";

import TopBanner from "./components/topbanner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import TopicDetail from "./components/BlogPage/TopicDetail";
import ProductPage from "./pages/ProductPage";
import DocsPage from "./pages/DocsPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityPages from "./components/Community/CommunityPages";
import Tutorials from "./components/Community/Tutorials/Tutorials";
import Layout from "./components/BlogPage/Layout";
import TutorialsSection from "./components/Community/TutorialsSection";
import TutorialsDetail from "./components/Community/Tutorials/TutorialsDetail";
import QuestionsDetail from "./components/Community/Questions/QuestionsDetail";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import DocDetails from "./components/Docs/DocDetails";
import Solutions from "./pages/Solutions";
import SolutionDetails from "./components/Solutions/SolutionsDetails";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <TopBanner></TopBanner>

      <Switch>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/" element={<HomePage />}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/:page" element={<Layout />}></Route>
          <Route path="/postdetails/:id" element={<TopicDetail />}></Route>
          {/* COMMUNITY */}
          <Route path="/community/:page" element={<CommunityPages />}></Route>
          <Route
            path="/community/tutorials/:id"
            element={<TutorialsDetail />}
          ></Route>
          <Route
            path="/community/questions/:id"
            element={<QuestionsDetail />}
          ></Route>
          {/* Docs */}
          <Route path="/docs/:page" element={<CommunityPages />}></Route>
          <Route path="/docs/detail/:id" element={<DocDetails />}></Route>

          {/* Solutions */}
          <Route path="/solutions" element={<Solutions />}></Route>
          <Route
            path="/solution/detail/:id"
            element={<SolutionDetails />}
          ></Route>

          {/* Search */}
          <Route path="/search/:text" element={<Search />}></Route>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
