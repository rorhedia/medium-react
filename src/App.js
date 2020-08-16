import React from "react";
import "./App.css";

//Components
import Blog from "./screens/Blog";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="blog">
        <Blog />
      </section>
    </div>
  );
}

export default App;
