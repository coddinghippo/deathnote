import React, { useEffect } from "react";
import { api } from "./api";
import { GlobalStyle } from "./styles/global-styles";

const App = () => {
  useEffect(() => {
    getSummonerByName("상산조자룡이다");
  }, []);

  const getSummonerByName = async (summonerName: string) => {
    const res = await api.getSummonerByName(summonerName);
    console.log(res);
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">Hello world</div>
    </>
  );
};

export default App;
