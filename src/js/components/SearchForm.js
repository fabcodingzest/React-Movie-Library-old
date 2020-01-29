import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  padding: 1rem 0 0 3rem;
  /* background-color: white; */
  h1 {
    width: 20vw;
    color: white;
    font-family: Roboto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 90px;
  }
  input {
    width: 400px;
    padding: 10px;
    border-radius: 50px;
    background-color: #fff;
    color: #000;
    outline: none;
    border: none;
    font-size: 1rem;
  }
`;

const SearchForm = () => {
  return (
    <SearchWrapper>
      <div>
        <h1>RM Library</h1>
      </div>
      <div>
        <form>
          <input placeholder="Search Movie here..." />
        </form>
      </div>
    </SearchWrapper>
  );
};
export default SearchForm;
