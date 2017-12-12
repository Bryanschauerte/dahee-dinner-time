import './stateless.css';
import React, { Component } from 'react';
import chicken from './Chicken_sombrero.gif';

const QuestionOne = () =>{
    return (
        <div className="question-container">
            <h1 className="question-title">STATeLESS QUSTION ONE</h1>
            <div className="question-choices">
                <div className="question-picture">
                    <img src={chicken} className="App-logo" alt="chicken" />
                </div>
            </div>
            <div className="question-user-selected"></div>
        </div>
);
};

export default QuestionOne;