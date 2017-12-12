import './stateless.css';
import React, { Component } from 'react';

const QuestionTwo = () => {
    return (
        <div className="question-container">
            <h1 className="question-title">STATeLESS QUSTION Two</h1>
            <div className="question-choices">
                <div className="question-picture">Some Picture</div>
            </div>
            <div className="question-user-selected"></div>
        </div>
    );
};

export default QuestionTwo;