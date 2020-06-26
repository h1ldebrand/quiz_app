// Node modules import
import React, { Component } from 'react';

type SkipQuestionProps = {
    fetchQuestion: () => void
    incrementQuestionsCount: () => void
}

// Renders question's info
class SkipQuestion extends Component<SkipQuestionProps> {

    constructor(props: Readonly<SkipQuestionProps>){
        super(props);

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
