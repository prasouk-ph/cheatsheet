import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/utils/Layout/Layout'
import Home from './components/pages/Home/Home';
import ReactJs from './components/pages/ReactJs/ReactJs'
import JavaScript from './components/pages/JavaScript/JavaScript';
import Git from './components/pages/Git/Git';
import Css from './components/pages/Css/Css';
import Html from './components/pages/Html/Html';
import Regex from './components/pages/Regex/Regex';
import Npm from './components/pages/Npm/Npm';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react" element={<ReactJs />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/git" element={<Git />} />
          <Route path="/css" element={<Css />} />
          <Route path="/html" element={<Html />} />
          <Route path="/regex" element={<Regex />} />
          <Route path="/npm" element={<Npm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
