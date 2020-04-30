import React from "react";
import Blog from "./containers/Blog/Blog";
import classes from "./App.module.css";
// import { StyleRoot } from "radium";

function title(string) {
  //return <span style="color:seagreen;">${string}</span>;
  return string.raw[0].split('').join('_');
}

function App() {
  return (
    // <StyleRoot>
    <div className={`container ${classes.App}`}>
      <header className="App-header">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className={`display-4 ${classes.title}`}>Lecture 5</h1>
            <p className="lead">{title`ReactJs CSS`}</p>
          </div>
        </div>
      </header>
      <section>
        <Blog />
      </section>
    </div>
    // </StyleRoot>
  );
}

export default App;
