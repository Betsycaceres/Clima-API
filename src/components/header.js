import React, { Fragment } from "react";

const Header = ({ titulo }) => {
  return (
    <nav class="navbar navbar-primary bg-primary text-white">{titulo}</nav>
  );
};
export default Header;
