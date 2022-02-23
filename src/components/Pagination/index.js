import { Fragment } from 'react';
import styled from 'styled-components';
import Text from '../Text';

const Container = styled.div`
  margin: 15px auto;
  height: 55px;
  width: fit-content;
  color: #0c326f;
  border: 1px solid #0c326f;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 10px 25px;
  white-space: nowrap;
`;

const StyledText = styled(Text).attrs({ forwardedAs: 'span' })`
  cursor: pointer;

  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;

const Divider = styled(Text).attrs({ forwardedAs: 'span' })`
  margin: 0 5px;

  &:after {
    content: '-';
  }
`;

function Pagination(props) {
  const { page, numberOfPages, setPage } = props;

  return (
    <Container>
      <StyledText onClick={() => setPage(Math.max(0, page - 1))}>
        {'<< Anterior'}
      </StyledText>
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <Fragment key={index}>
          <Divider />
          <StyledText onClick={() => setPage(index)}>{index + 1}</StyledText>
        </Fragment>
      ))}
      <Divider />
      <StyledText
        onClick={() => setPage(Math.min(numberOfPages - 1, page + 1))}
      >
        {'Próximo >>'}
      </StyledText>
    </Container>
  );
}

export default Pagination;
