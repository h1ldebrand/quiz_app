// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion, incrementQuestionsCount } from '../actions/question';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import Loader from './main/loader';
import SkipQuestion from './main/skip-question';
import AnswerBuilding from './main/answer-building';
import AnswerProposition from './main/answer-proposition';


// Main page
class Main extends Component {

    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {

        const { question : questionsProps } = this.props;

        if(Object.keys(questionsProps).length){

            const {id, answer, question, category, transformedAnswer} = questionsProps;
            const { fetchQuestion, incrementQuestionsCount, totalCount } = this.props;
            console.log("answer array: ", answer);
            return (
                <div className="main-page">
                    <ActivityLog totalCount={totalCount} />
                    <QuestionInfo
                        id={id}
                        answer={answer}
                        question={question}
                        category={category}
                    />
                    <SkipQuestion
                        fetchQuestion={fetchQuestion}
                        incrementQuestionsCount={incrementQuestionsCount}
                    />
                    <AnswerBuilding/>
                    <AnswerProposition
                        characters={transformedAnswer}
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

    const { questions : questionsState } = state;
    return {
        question: questionsState.question,
        totalCount: questionsState.totalCount,
    }
}

export default connect(mapStateToProps, {fetchQuestion, incrementQuestionsCount})(Main)
