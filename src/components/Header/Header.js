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
          <NavLink to="/posts" activeClassName={classes.active}>post</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName={classes.active}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
