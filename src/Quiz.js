import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quiz_position: 1,
    }
  }

  showNextQuestion() {
    this.setState({quiz_position: this.state.quiz_position + 1})
  }

  render () {
    const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;
    return (
      <React.Fragment>
      {
        isQuizEnd
        ? < QuizEnd />
        : <QuizQuestion 
            quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
            showNextQuestionHandler = {this.showNextQuestion.bind(this)}
          />
      }
      </React.Fragment>

      
    )
  }  
}

export default Quiz;
