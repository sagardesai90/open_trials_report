import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import homePage from "./pages/homePage";

const App = () => (
    <Router>
        <div>
          <Route exact path="/" component={homePage} />
        </div>
    </Router>
)

export default App;
