import React from "react";

const Footer = () => (
  <footer className="footer-container">
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand text-danger font-weight-bold" href="https://github.com/drprat/giffy-browser/">
        Giffy-browser @drprat
      </a> 
      <p className="text-muted lead" href="#">
        &copy;2019. All Rights Reserved by Prat.
      </p>
      <a
        className="navbar-brand text-muted"
        href="https://github.com/drprat/giffy-browser"
      >
        github
      </a>    
    </nav>
  </footer>
);

export default Footer;