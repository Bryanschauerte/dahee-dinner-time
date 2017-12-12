import './stateless.css';
import React, { Component } from 'react';

const QuestionThree = () => {
    return (
        <div className="question-container">
            <h1 className="question-title">STATeLESS QUSTION Three</h1>
            <div className="question-choices">
                <div className="question-picture">Some Picture</div>
            </div>
            <div className="question-user-selected"></div>
        </div>
    );
};

export default QuestionThree;