import React, { Component } from 'react';
import './containers-style.css';
import QuestionOne from '../stateless/question-one';
import QuestionTwo from '../stateless/question-two';
import QuestionThree from '../stateless/question-three';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            mainCourse: {
                picked:'',
                choices: ['Chicken', 'Fish', 'Beef', 'Pizza']
            },
            howToCook: {
                picked: '',
                chicken: ['Fried', 'Boiled', 'Baked', 'BBQ'],
                fish:['Fried', 'Boiled', 'Baked', 'BBQ'],
                beef:['Fried', 'Baked', 'BBQ', 'Boiled']
            },
            sides: {
                picked: '',
                rice: ['Fried Rice', 'Cheese and Broccili', 'Soy Rice', 'Chicken Flavored', 'Plain Rice'],
                vegetables: ['Carrots', 'Mixed Vegetables', 'Peas', 'Broccoli', 'Mushrooms', 'Onions'],
                potatoes: ['French Fries', 'Baked Potato', 'Roasted Potato', 'Raw Potatos', 'Potato Salad', 'Mashed Potatoes'],
                salad: ['Marshmellow Salad', 'Fruit Salad', 'Regular Salad']
            },
            qNumber: 0
        };
        this.showQuestion = this.showQuestion.bind(this);
        this.changeQuestionNumber = this.changeQuestionNumber.bind(this)
    }

    changeQuestionNumber(){
        this.setState({qNumber: this.state.qNumber + 1})
    }

    showQuestion(){
        if(this.state.qNumber === 0){
            return (<QuestionOne/>);
        }
        else if(this.state.qNumber === 1){
            return (<QuestionTwo />);
        }
        else if(this.state.qNumber === 2){
            return (<QuestionThree />);
        } else {
            return (<h1>DINNER TIME BABY</h1>);
        }
    }

    render(){
        return (<div>{this.showQuestion()}</div>);
    }
}

export default Main;