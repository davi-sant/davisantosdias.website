import React from "react";
import Home from "../src/Pages/Home/index.js"
import globalstyles from '../src/Design/ResetCss/Global.js';
const App = () => {
  globalstyles()
  return (
    <Home />
  );
}
export default App;
