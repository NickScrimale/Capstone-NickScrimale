import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getAllQuestions, deleteQuestion } from "../Modules/QuestionManager";
import { QuestionCard } from "./QuestionCard";


export const QuestionList = () => {
    const [questions, setQuestions] = useState([]);
  
    const getQuestions = () => {
      return getAllQuestions().then(questionsFromAPI => {
        setQuestions(questionsFromAPI)
      });
    };

    const handleDeleteQuestion = id => {
      deleteQuestion(id)
      .then(() => getAllQuestions().then(setQuestions));
  };
  
     useEffect(() => {
       getQuestions();
     }, []);

    const navigate = useNavigate();
  
    return (
      <>
        <section className="section-content">
          <button type="button" className="btn" onClick={() => {navigate("/questions/create")}}>Create Question</button>
        </section>
        <div className="container-cards">
          {questions.map(questions => <QuestionCard key={questions.id} questions={questions} handleDeleteQuestion={handleDeleteQuestion} />)}
        </div>
      </>
    );
  };