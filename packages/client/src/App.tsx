import { api } from './api';
import SearchView from './components/SearchView';
import { fonts } from './styles/_mixin';
import { GlobalStyle } from './styles/global-styles';
import styled from 'styled-components';
// import { ILeague, ISummoner } from './shared-interfaces';
import React, { useEffect, useState ,KeyboardEvent} from 'react';

// export interface EventHandlerProps{
//   onKeyDown: (e:KeyboardEvent<HTMLInputElement>) => void
// }

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


const TestBoxButton = styled.button`
  display: inline;
  border : none;
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  color: black;
  outline : none;
  position : relative;
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

const ResultFoam = styled.p`
  width: 100%;
  font-size:14px;
`;


const App = () => {

  const [summoners, setSummoners] = useState();
  const [summonersData,setSummonersData] = useState();
  const [summonersLeague,setSummonersLeague] = useState();

  const handleInput = (text: string) => {
    setSummoners(text)
  };
  const enterEvent = async () => {
    try{
      const temp = await getSummonerByName(summoners);
    getLeagueByEncryptedId(temp);
    }
    catch(err){
      console.error(err);
    }
  };
  //Check 'enter' 
  const handleKeyPress = (e : KeyboardEvent<HTMLInputElement>) =>{
    if (e.keyCode === 13){
      enterEvent();
      // getSummonerByName(summonerName);
    }
  };

  const getSummonerByName = async (summonerName: string) => {
    const data = await api.getSummonerByName(summonerName);
    setSummonersData(data); //to summonersData 
    console.log(data);
    return data.id;
  };
  
  const getLeagueByEncryptedId = async(encryptedId: string) =>{
    const data = await api.getLeagueByEncryptedId(encryptedId);
    console.log(data);
    setSummonersLeague(data);
    
  }

  return (
    <>
      <GlobalStyle />
      <MainBox>

        <Logo src="/deathnote.png" alt="deathnote_logo"></Logo>
        <MainBoxForm>
          <MainSearchForm placeholder="소환사명, 소환사명, ..." onChange={e => handleInput(e.target.value)}
          onKeyDown={(e : any) => {
            handleKeyPress(e);
          }}
          >
          </MainSearchForm>
          <MainBoxButton 
          onClick={()=>{
            enterEvent();
          }
          }
          >
            검색
          </MainBoxButton>
        </MainBoxForm>
      </MainBox>
      {/* {summonersData ?  
      (
      <ResultFoam>{summonersData.id}</ResultFoam>
      )
       : null} */}
       {summonersLeague ?
       (
       <Logo src={require(`../public/ranked-emblems/Emblem_${summonersLeague[0].tier}.png`)} alt="summonersTierImg"/>
       )
       : null}
    </>
  );
};

export default App;
