import React, { useState } from "react";
// import ReactDOM from "react-dom";

import {
  BrowserRouter as Router, Route, Routes as Switch
} from 'react-router-dom';
import './App.css';
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'

import TopBanner from './components/topbanner'
import Navbar from './components/Navbar'
import TopicDetail from './components/BlogPage/TopicDetail'
import ProductPage from "./pages/ProductPage";
import DocsPage from "./pages/DocsPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityPages from "./components/Community/CommunityPages";
import Tutorials from "./components/Community/Tutorials/Tutorials";
import Layout from "./components/BlogPage/Layout";
import TutorialsSection from "./components/Community/TutorialsSection";
import TutorialsDetail from "./components/Community/Tutorials/TutorialsDetail";
import QuestionsDetail from "./components/Community/Questions/QuestionsDetail";

function App() {
  return (
    <Router>
      <TopBanner></TopBanner>

      <Switch>

        <Route path="/" element={<HomePage />}>
        </Route>

        <Route path="/:page" element={<Layout />}></Route>

        {/* COMMUNITY */}
        <Route path="/community/:page" element={<CommunityPages />}></Route>
        <Route path="/community/tutorials/:topic" element={<TutorialsDetail />}></Route>
        <Route path="/community/questions/:topic" element={<QuestionsDetail />}></Route>

        {/* Docs */}

        <Route path="/docs/:page" element={<CommunityPages />}></Route>

      </Switch>
    </Router>
  );
}

export default App;
