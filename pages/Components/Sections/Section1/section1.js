import React from 'react';
import './style.scss'
export default()=> {
  return (
    <div className="menu has-background-info">
    <div className="container">
    <nav className="nav">
               <li className="is-size-4  is-uppercase has-text-warning">
                       Busniess  Website
                   </li>             
                   <ul className="is-pulled-right has-text-white">
                   <li>
                       <a href="#">Home</a>
                   </li>
                   <li>
                       <a href="#">Services</a>
                   </li>
                   <li>
                       <a href="#">Contact</a>
                   </li>
                   <li>
                       <a href="#">Gallery</a>
                   </li>
                   <li>
                       <a href="#">Product</a>
                   </li>
                   <li>
                       <a href="#">About-US</a>
                   </li>
                   <li>
                       <a href="#">SignUp</a>
                   </li>
                   <li>
                   <i class="fa fa-bell is-size-4"></i>
                   </li>
                   <li>
                   <button class="button is-normal has-background-info has-text-white">
                   <i className="fa fa-user is-size-5"></i>
                   Sign In
                   </button>
                   </li>
               </ul>
           </nav>
           </div>
    </div>
  );
}
