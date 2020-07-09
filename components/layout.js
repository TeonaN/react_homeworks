import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        ></link>
      </Head>

      <nav className="navbar-light bg-light center text-center">
        <a>
          <p className="text-center">COVID-19 Tracker</p>
        </a>
      </nav>

      <header className="App-header  text-center">{children}</header>
    </div>
  );
};

export default Layout;
