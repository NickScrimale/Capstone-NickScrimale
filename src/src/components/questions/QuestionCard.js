import React from 'react';
import "./Question.css";
import { Link } from "react-router-dom";
import { NavBar } from '../nav/NavBar';
import { QuestionList } from './QuestionList';
import { getQuestionById } from '../Modules/QuestionManager';

export const QuestionCard = ({ question }) => {
    return (
        
      <div className="card">
        <div className="card-content">
          <h3>Question: <span className="question">
            {question}
          </span></h3>
        </div>
      </div>
    );
}
  