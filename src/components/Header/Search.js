import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchSVG } from '../../assets/search.svg';

const StyledForm = styled.form`
  background-color: #f1f1f1;
  height: 55px;
  max-width: 340px;
  border-radius: 5px;
`;

const StyledInput = styled.input`
  background-color: #f1f1f1;
  -webkit-appearance: textfield;
  border: 0;
  box-sizing: border-box;
  width: 86%;
  height: 35px;
  margin: 10px 0;
  color: #000;
  float: left;
  border-right: none;
  font-size: 16px;
  padding: 4px 19px;
  text-align: left;
  font-style: italic;
  font-weight: 500;
`;

const StyledButton = styled.button`
  width: 14%;
  height: 55px;
  margin-right: 0;
  border: none;
  color: #fff;
  float: left;
  border-radius: 0 5px 5px 0;
  transition: background 250ms;
  cursor: pointer;
`;

const StyledSearchSVG = styled(SearchSVG)`
  width: 19px;

  & path {
    fill: #1351b4;
  }
`;

function Search(props) {
  const { setQuery } = props;
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        placeholder="Buscar"
        value={search}
        onChange={handleChange}
      />
      <StyledButton type="submit">
        <StyledSearchSVG />
      </StyledButton>
    </StyledForm>
  );
}

export default Search;
