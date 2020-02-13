import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { api } from "../api";
import { ISummoner } from "../shared-interfaces";
import { fonts } from "../styles/_mixin";

interface ITextProps {
  size: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  border: none;
  border-bottom 1px solid white;
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;
`;

const SearchButton = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid white;
  text-align: center;
  cursor: pointer;
`;

const SummonerText = styled.p`
  font-size: ${(props: ITextProps) => props.size};
  font-family: ${fonts.generalFont};
`;

const SearchView = () => {
  const [summonerName, setSummonerName] = useState();
  const [summoner, setSummoner] = useState();

  // useEffect(() => {
  //   getSummonerByName("상산조자룡이다");
  // }, []);

  const getSummonerByName = async (summonerName: string) => {
    const data = await api.getSummonerByName(summonerName);
    setSummoner(data);
  };

  const onChangeText = (text: string) => setSummonerName(text);

  const onClickSearch = () => getSummonerByName(summonerName);

  const renderSummonerData = (data: ISummoner) => {
    return (
      <div key={data.id}>
        <SummonerText size="2rem">{data.name}</SummonerText>
        <SummonerText size="0.8rem">{data.id}</SummonerText>
        <SummonerText size="0.8rem">
          <b>Level: </b>
          {data.summonerLevel}
        </SummonerText>
      </div>
    );
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <InputBox
          placeholder="Summoner to die"
          onChange={e => onChangeText(e.target.value)}
        ></InputBox>
        <SearchButton onClick={onClickSearch}>SEARCH</SearchButton>
      </SearchWrapper>
      {summoner && summoner.id ? (
        <div>{renderSummonerData(summoner)}</div>
      ) : null}
    </Wrapper>
  );
};

export default SearchView;
