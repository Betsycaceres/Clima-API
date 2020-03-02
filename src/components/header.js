import React, { Fragment } from "react";

const Header = ({ titulo }) => {
  return (
    <nav className="navbar navbar-primary bg-primary text-white">{titulo}</nav>
  );
};
export default Header;
