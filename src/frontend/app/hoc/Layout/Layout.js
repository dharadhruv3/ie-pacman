import React from "react";
import "./Layout.scss";

const Layout = props => (
  <section className="section">{props.children}</section>
);

export default Layout;