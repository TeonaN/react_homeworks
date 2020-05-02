import React from "react";
import "./App.css";
import Service from "./containers/Service";
import Logo from "./bacteria.png";


function App() {
  return (
    <div className="App">
      <header className="App-header  text-center" >
        <nav className="navbar navbar-light bg-light center text-center" >
          <a>
            <img
              src={Logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            <p className="text-center">COVID-19 Tracker</p>
            
          </a>
        </nav>
        <Service />
      </header>
      
    </div>
  );
}

export default App;
