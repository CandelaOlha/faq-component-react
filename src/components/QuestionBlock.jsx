import "../styles/QuestionBlock.css";
import PropTypes from "prop-types";

const QuestionBlock = ({ faq, toggleQuestion }) => {
  const { question, answer, active, id } = faq;

  return (
    <div className="question">
      <header className="question-header">
        <h2 className="question-header-text">{question}</h2>
        <button onClick={() => toggleQuestion(id)} className="toggle-button">
          +
        </button>
      </header>
      <p className={`answer ${active && "active"}`}>{answer}</p>
    </div>
  );
};

QuestionBlock.propTypes = {
  faq: PropTypes.object.isRequired,
  toggleQuestion: PropTypes.func.isRequired,
};

export default QuestionBlock;
