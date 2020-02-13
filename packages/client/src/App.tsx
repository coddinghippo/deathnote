import { api } from './api';
import SearchView from './components/SearchView';
import { fonts } from './styles/_mixin';
import { GlobalStyle } from './styles/global-styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// const HeaderTitle = styled.div`
//   margin-top: 30vh;
//   font-size: 4rem;
//   text-align: center;
//   font-family: ${fonts.themeFont}, sans-serif;
// `;

// const SearchContent = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   justify-content: center;
//   font-family: ${fonts.themeFont}, sans-serif;
// `;


const MainBoxForm = styled.div`
  position : relative;
`;

const MainBox = styled.div`
  text-align: center;
  width: 624px;
  margin: 0 auto;
`;


const MainBoxButton = styled.button`
  display: inline;
  border : none;
  background-color: black;
  font-weight: 600;
  font-size: 16px;
  color: white;
  outline : none;
  position : absolute;
  top: 0;
  right : 0;
  margin: 10px 10px 0 0;
  height : 30px;
  cursor : pointer;

`;


const MainSearchForm = styled.input`
display: block;
width: 100%;
padding: 15px 150px 18px 17px;
background: white;
border: none;
line-height: 17px;
font-size: 14px;
color: #9b9b9b;
box-sizing: border-box;
outline: none;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
`;

const Logo = styled.img`
  height : 300px;
`;

const App = () => {

  const [summoners, setSummoners] = useState()

  const handleInput = (text: string) => {
    setSummoners(text)
  }

  const getSummonerByName = async (summonerName: string) => {
    const res = await api.getSummonerByName(summonerName);
    console.log(res);
  };

  return (
    <>
      <GlobalStyle />
      <MainBox>

        <Logo src="/deathnote.png" alt="deathnote_logo"></Logo>
        <MainBoxForm>
          <MainSearchForm placeholder="소환사명, 소환사명, ..." onChange={e => handleInput(e.target.value)}>
          </MainSearchForm>
          <MainBoxButton onClick={() => getSummonerByName(summoners)}>
            검색
          </MainBoxButton>

        </MainBoxForm>


      </MainBox>

    </>
  );
};

export default App;
