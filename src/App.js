import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Header, Text, FAQItem, Pagination } from './components';

const Title = styled(Text)`
  color: #0c326f;
  text-align: center;
  margin: 25px 0;
`;

function App() {
  const [{ items, pages }, setData] = useState({ items: [], pages: 0 });
  const [{ query, page }, setInputs] = useState({ query: '', page: 0 });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/?q=${query}&page=${page}`)
      .then(({ data }) => setData(data))
      .catch(console.error);
  }, [page, query]);

  console.log(items, pages);

  const handleSetQuery = (q) =>
    setInputs((inputsState) => ({ ...inputsState, page: 0, query: q }));
  const handleSetPage = (p) =>
    setInputs((inputsState) => ({ ...inputsState, page: p }));

  return (
    <div style={{ paddingBottom: 5 }}>
      <Header setQuery={handleSetQuery} />
      <Title forwardedAs="h2">F.A.Q. - Suprimentos de Fundos</Title>
      {items.map(({ idQuestão, questão, reposta }) => (
        <FAQItem
          key={idQuestão}
          id={idQuestão}
          question={questão}
          answer={reposta}
        />
      ))}
      <Pagination page={page} numberOfPages={pages} setPage={handleSetPage} />
    </div>
  );
}

export default App;
