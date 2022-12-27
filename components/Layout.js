import React from "react";
import Footer from "./footer";
import Nav from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
