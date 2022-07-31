import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Daily from './components/Daily';
import Home from './components/Home';
import Library from './components/Library';
import Weekly from './components/Weekly';

function App() {
  return (
    <div>
      <h1>영화진흥위원회</h1>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to={`/daily`}>일별 박스오피스</Link>
        </li>
        <li>
          <Link to={`/weekly`}>주간/주말 박스오피스</Link>
        </li>
        <li>
          <Link to='/library'>영화목록</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/daily' element={<Daily />} />
        <Route path='/weekly' element={<Weekly />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
