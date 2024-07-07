import logo from './logo.svg';
import './App.css';
import background from "./images/tree.jpg"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


import About from './About';
import Nav from './Nav';

function App() {
  return (  
    <Router>
    <div> 
  <img src={background} className="img-fluid" alt="Responsive image" width="100%"></img>
  <Nav/>
    <Routes>
    <Route path='/about' element={<About/>} />
    {/* Content */}

    </Routes>



  </div>  
  </Router>   
  );
}

export default App;
