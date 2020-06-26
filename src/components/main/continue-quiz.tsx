import React, { Component } from 'react';

type ContinueQuizProps = {
    fetchQuestion: () => void
    incrementCorrentQuestion: () => void
}

// Allows get next quiz
class ContinueQuiz extends Component<ContinueQuizProps>{

    constructor(props: Readonly<ContinueQuizProps>){
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
