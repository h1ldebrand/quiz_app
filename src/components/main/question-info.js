// Node modules import
import React, { Component } from 'react';

// Renders question's info
export default class QuestionInfo extends Component {
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
