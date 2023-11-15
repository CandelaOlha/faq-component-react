import "../styles/QuestionBlock.css";
import PropTypes from "prop-types";

const QuestionBlock = ({ faq, toggleQuestion }) => {
  const { question, answer, active, button, id } = faq;

  return (
    <div onClick={() => toggleQuestion(id)} className="question-block">
      <header className="question-header">
        <h2 className="question-header-text">{question}</h2>
        <button className="toggle-button">{button}</button>
      </header>
      <p className={`answer ${active && "active-answer"}`}>{answer}</p>
    </div>
  );
};

QuestionBlock.propTypes = {
  faq: PropTypes.object.isRequired,
  toggleQuestion: PropTypes.func.isRequired,
};

export default QuestionBlock;
