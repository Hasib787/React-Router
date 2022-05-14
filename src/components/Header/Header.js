import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.style.css";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home" activeClassName={classes.active}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={classes.active}>About</NavLink>
        </li>
        <li>
          <NavLink to="/post" activeClassName={classes.active}>Post</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
