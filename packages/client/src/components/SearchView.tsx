import React from "react";
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
  border-radius: 1rem;
  font-size: 1rem;
  width: 10rem;
  border: 1px solid white;
  text-align: center;
  cursor: pointer;
`;

const SearchView = () => {
  return (
    <Wrapper>
      <InputBox placeholder="Summoner to die"></InputBox>
      <SearchButton>SEARCH</SearchButton>
    </Wrapper>
  );
};

export default SearchView;
