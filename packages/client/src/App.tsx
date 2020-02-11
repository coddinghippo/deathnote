import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { api } from "./api";

const App = () => {
  useEffect(() => {
    getSummonerByName("상산조자룡이다");
  }, []);

  const getSummonerByName = async (summonerName: string) => {
    const res = await api.getSummonerByName(summonerName);
    console.log(res);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
