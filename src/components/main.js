// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion } from '../actions/question';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import Loader from './main/loader';

// Main page
class Main extends Component {

    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {

        if(this.props.question){
            const {id, answer, question, category} = this.props.question;

            return (
                <div className="main-page">
                    <ActivityLog />
                    <QuestionInfo
                        id={id}
                        answer={answer}
                        question={question}
                        category={category}
                    />
                </div>

            );

        } else {
            return (
                <div className="main-page">
                    <Loader />
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        question: state.questions.question
    }
}

export default connect(mapStateToProps, {fetchQuestion})(Main)
