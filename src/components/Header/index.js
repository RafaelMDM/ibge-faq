import styled from 'styled-components';
import Search from './Search';

const Container = styled.header`
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  padding: 10px 5%;
`;

function Header(props) {
  return (
    <Container>
      <Search {...props} />
    </Container>
  );
}

export default Header;
