import React from "react";
import Search from "./components/UI/Search/Search";
import data from "./components/data";
function App() {
  console.log("App.js: ", data);

  return (
    <div className="container">
      <Search userDetails={data} />
    </div>
  );
}

export default App;
