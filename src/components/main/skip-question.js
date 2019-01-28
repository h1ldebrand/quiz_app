// Node modules import
import React, { Component } from 'react';

// Renders question's info
class SkipQuestion extends Component {

    constructor(){
        super();

        this.receiveNextQuestion = this.receiveNextQuestion.bind(this);
    }

    receiveNextQuestion(){
        this.props.fetchQuestion();
        this.props.incrementQuestionsCount();
    }

    render() {
        return (
            <div className="skip-question" onClick={this.receiveNextQuestion}>Skip</div>
        );
    }
}

export default SkipQuestion;
