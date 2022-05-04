import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import DynamicPage from './DynamicPage';
import Post from './Post';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/dinamico" caseSensitive={false} element={<DynamicPage />} />
        <Route path="/post" caseSensitive={false} element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;