// Node modules import
import React, { Component } from 'react';

type QuestionInfoProps = {
    id: number
    answer: string
    question: string
    category: string
}

// Renders question's info
export default class QuestionInfo extends Component<QuestionInfoProps> {
    render() {
        const {id, answer, question, category}  = this.props;
        return (
            <div className="question-info">
                <h1 className="title">Question #{ id }</h1>
                <h2 className="category">category: {category}</h2>
                <p className="description">
                    { question }
                </p>
            </div>
        );
    }
}
