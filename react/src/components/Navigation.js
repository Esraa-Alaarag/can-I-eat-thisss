import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <a href="/can-I-eat-thisss"><img src="/can-I-eat-thisss/images/logo.png" alt="Logo" /></a>
        </div>
    	  <nav>
    	     <ul>
    	       <li className="navLi"><Link to="/can-I-eat-thisss">Home</Link></li>
    	       <li className="navLi"><NavLink to="/can-I-eat-thisss/profile">Profile</NavLink></li>
    	       <li className="navLi"><NavLink to="/can-I-eat-thisss/history">History</NavLink></li>
          </ul>
    	  </nav>
	    </div>
    );
  }
}

export default Navigation;