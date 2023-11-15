import "../styles/FaqContainer.css";
import QuestionBlock from "./QuestionBlock";
import { useState } from "react";

const initialFaqs = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    active: false,
    button: "+",
    id: 1,
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    active: false,
    button: "+",
    id: 2,
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    active: false,
    button: "+",
    id: 3,
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    active: false,
    button: "+",
    id: 4,
  },
  {
    question: "Question 5",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate accusamus veritatis sapiente quisquam repudiandae ullam vero blanditiis. Maxime, nostrum!",
    active: false,
    button: "+",
    id: 5,
  },
];

const FaqContainer = () => {
  const [faqs, setFaqs] = useState(initialFaqs);

  const toggleQuestion = (id) => {
    const newArray = faqs.map((faq) => {
      if (faq.id === id) {
        faq.active = !faq.active;
        faq.button = "-";
      } else {
        faq.active = false;
        faq.button = "+";
      }
      return faq;
    });
    setFaqs(newArray);
  };

  return (
    <div className="faq-container">
      <h1 className="headline">FAQ Component</h1>
      {faqs.map((faq) => (
        <QuestionBlock faq={faq} key={faq.id} toggleQuestion={toggleQuestion} />
      ))}
    </div>
  );
};

export default FaqContainer;
