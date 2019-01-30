// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import {
    fetchQuestion,
    incrementQuestionsCount,
    charRelocationToBoard,
    charRelocationFromBoard,
    checkAnswer,
    incrementCorrentQuestion
} from '../actions/question';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import Loader from './main/loader';
import SkipQuestion from './main/skip-question';
import AnswerBuilding from './main/answer-building';
import AnswerProposition from './main/answer-proposition';
import ContinueQuiz from './main/continue-quiz';
import ProgressMessage from './main/progress-message'


// Main page
class Main extends Component {

    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {

        const { question : questionsProps } = this.props;

        if(Object.keys(questionsProps).length){

            // question params
            const {
                id,
                answer,
                question,
                category,
            } = questionsProps;

            // props
            const {
                fetchQuestion,
                incrementQuestionsCount,
                totalCount,
                charRelocationToBoard,
                transformedAnswer,
                arrayOnBoard,
                charRelocationFromBoard,
                checkAnswer,
                arrayInProposition,
                answerCondition,
                incrementCorrentQuestion,
                correctAnswers
            } = this.props;
            console.log('answer: ', answer);
            return (
                <div className="main-page">
                    <ActivityLog
                        totalCount={totalCount}
                        correctAnswers={correctAnswers}
                    />
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
                    {
                        arrayInProposition.length === 0
                            ? <ProgressMessage
                                answerCondition={answerCondition} />
                            : ""
                    }

                    <AnswerBuilding
                        characters={arrayOnBoard}
                        charRelocationFromBoard={charRelocationFromBoard}
                        answerCondition={answerCondition}
                        arrayInProposition={arrayInProposition}
                    />
                    {(arrayInProposition.length > 0) ? (
                        <AnswerProposition
                            characters={transformedAnswer}
                            charRelocationToBoard={charRelocationToBoard}
                            checkAnswer={checkAnswer}
                        />
                    ) : (
                        answerCondition
                            ? <ContinueQuiz
                                fetchQuestion={fetchQuestion}
                                incrementCorrentQuestion={incrementCorrentQuestion}
                            />
                            : ""
                    )}


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
        transformedAnswer : questionsState.arrayInProposition,
        arrayOnBoard: questionsState.arrayOnBoard,
        arrayInProposition: questionsState.arrayInProposition,
        answerCondition: questionsState.checkAnswerCondition,
        correctAnswers: questionsState.correctAnswers
    }
}

export default connect(
        mapStateToProps,
        {
            fetchQuestion,
            incrementQuestionsCount,
            charRelocationToBoard,
            charRelocationFromBoard,
            checkAnswer,
            incrementCorrentQuestion
        }
    )(Main)
