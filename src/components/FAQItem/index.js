import styled from 'styled-components';
import Text from '../Text';

const Container = styled.div`
  margin: 0 auto 25px;
  width: 90%;
`;

const QuestionContainer = styled.div`
  height: 55px;
  line-height: 55px;
  background-color: #0c326f;
  color: #fff;
  padding: 0 10px;
`;

const AnswerContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  width: 90%;
  margin-left: auto;
`;

/**
 * @typedef FAQItemProps
 * @type {object}
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 */

/**
 * @param {FAQItemProps} props
 */
function FAQItem(props) {
  const { id, question, answer } = props;

  return (
    <Container>
      <QuestionContainer>
        <Text>
          Q.{id} - {question}
        </Text>
      </QuestionContainer>
      <AnswerContainer>
        <Text>{answer}</Text>
      </AnswerContainer>
    </Container>
  );
}

export default FAQItem;
