import "../styles/FaqContainer.css";
import QuestionBlock from "./QuestionBlock";

const faqs = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    id: 1,
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    id: 2,
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    id: 3,
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    id: 4,
  },
  {
    question: "Question 5",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    id: 5,
  },
];

const FaqContainer = () => {
  return (
    <div className="faq-container">
      <h1 className="headline">FAQ Container</h1>
      {faqs.map((faq) => (
        <QuestionBlock faq={faq} key={faq.id} />
      ))}
    </div>
  );
};

export default FaqContainer;
