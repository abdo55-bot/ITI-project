import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Navbar(){
  return(
      <div className="navbar bg-primary navbar-dark text-white sticky-top navbar-expand">
          <NavLink to='/'className="navbar-brand m-2"><h1>Shopyfiy</h1></NavLink>
<ul className="navbar-nav">
  <li className="nav-item">
      <NavLink to='/products' className='nav-link'>Our Products</NavLink>
  </li>
  <li className="nav-item" style={{float:"right"}}><NavLink to='/login' className='nav-link' >login</NavLink></li>
  

</ul>
      </div>
  )
}

export default Navbar;