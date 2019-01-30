import React, { Component } from 'react';
import {fetchQuestion} from "../../actions/question";

// Allows get next quiz
class ContinueQuiz extends Component{

    constructor(props){
        super(props);

        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion(){
        const { fetchQuestion, incrementCorrentQuestion } = this.props;
        fetchQuestion();
        incrementCorrentQuestion()
    }

    render() {
        return (
            <div
                onClick={this.nextQuestion}
                className="next-question">
                Next Question
            </div>
        )
    }
}

export default ContinueQuiz;
