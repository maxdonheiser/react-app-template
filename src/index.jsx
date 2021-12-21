import React from "react";
import ReactDOM from "react-dom";

import './index.css';

const App = () => {
  return(
    <div>This is a template for building React apps with Webpack.</div>
  );
}

ReactDOM.render(<App/>, document.querySelector("#app"));
