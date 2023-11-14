import "../styles/QuestionBlock.css";
import PropTypes from "prop-types";

const QuestionBlock = ({ faq }) => {
  const { question, answer, id } = faq;

  return (
    <div className="question">
      <header className="question-header">
        <h2 className="question-header-text">{question}</h2>
        <button className="toggle-button">+</button>
      </header>
      <p className="answer">{answer}</p>
    </div>
  );
};

QuestionBlock.propTypes = {
  faq: PropTypes.object.isRequired,
};

export default QuestionBlock;
