import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

const SearchView = () => {
  const [summoner, setSummoner] = useState();
  console.log(summoner);

  const onChangeText = (text: string) => setSummoner(text);

  return (
    <Wrapper>
      <InputBox
        placeholder="Summoner to die"
        onChange={e => onChangeText(e.target.value)}
      ></InputBox>
      <SearchButton>SEARCH</SearchButton>
    </Wrapper>
  );
};

export default SearchView;
