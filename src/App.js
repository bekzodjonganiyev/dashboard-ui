import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Main from "./Components/Main/Main";
import FooterCard from "./Components/FooterCard/FooterCard";

import "./Assets/style.scss"

function App() {
  return (
    <div className="wrap">
      <Sidebar />
      <div className="main-section">

        <Header />

        <div className="cards">

          <Card title="Unsolved" content="50" />
          <Card title="Unsolved" content="50" />
          <Card title="Unsolved" content="50" />
          <Card title="Unsolved" content="50" />

        </div>

        <Main className="main"/>

        <div className="footer">
          <FooterCard />
          <FooterCard />
        </div>
      </div>
    </div>
  );
}

export default App;
