import styled from 'styled-components';

const StyledText = styled.p`
  font-family: Rawline, Raleway, 'Open Sans', sans-serif, Arial, Helvetica;
  margin: 0;
`;

function Text(props) {
  const { children, ...rest } = props;

  return <StyledText {...rest}>{children}</StyledText>;
}

export default Text;
