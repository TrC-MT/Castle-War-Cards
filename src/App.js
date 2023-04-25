import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './styles/commonStyles.css'

import Pages from './pages/PAGES.js';


function App() {
  return (
  
    <Router>

      <Routes>
        <Route path="/game" element={<Pages.game/>}/>
      </Routes>
    </Router>
  );
}

export default App;
