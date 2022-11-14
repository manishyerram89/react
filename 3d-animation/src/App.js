import './App.css';
import {Link, Route,Routes} from 'react-router-dom'
import Contactus from './components/Contactus';
import Login from './components/Login';
import Restaurants from './components/Restaurants';
import Signin from './components/Signin';
import Home from './components/Home';
import Spline from '@splinetool/react-spline';
import react,{useEffect} from 'react';

function App() {

  useEffect(() => {
    document.title = "SHOPPING WEB";
  }, []);


  return (
   
    <div className='Hero'>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mb-lg-0 ms-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link " to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Restaurants">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Signin">Signup</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>


<Routes>
        <Route path="" element={<Home/>}/>

        <Route path="Contactus" element={<Contactus/>}/>

        <Route path="Login" element={<Login/>}/>

        <Route path="Restaurants" element={<Restaurants/>}/>

        <Route path="Login" element={<Login/>}/>

        <Route path="Signin" element={<Signin/>}/>
</Routes>



    
    </div>
  );
}

export default App;