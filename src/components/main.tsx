// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import {
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

// Selectors import
import {
    getQuestion,
    getTotalCount,
    getArrayInProposition,
    getArrayOnBoard,
    isCheckAnswerCondition,
    getCorrectAnswers
} from '../selectors'
import {fetchQuestion} from "../actions/question";
import {AppStateType, CharType} from "../types";

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    fetchQuestion: () => void
    incrementQuestionsCount: () => void
    charRelocationToBoard: (char: CharType) => void
    charRelocationFromBoard: (char: CharType) => void
    checkAnswer: () => void,
    incrementCorrentQuestion: () => void
}

type OwnPropsType = {}

type MainPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

// Main page
class Main extends Component<MainPropsType> {

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

const mapStateToProps = (state: AppStateType) => {
    return {
        question: getQuestion(state),
        totalCount: getTotalCount(state),
        transformedAnswer : getArrayInProposition(state),
        arrayOnBoard: getArrayOnBoard(state),
        arrayInProposition: getArrayInProposition(state),
        answerCondition: isCheckAnswerCondition(state),
        correctAnswers: getCorrectAnswers(state)
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType>(
        mapStateToProps,
        {
            fetchQuestion,
            incrementQuestionsCount,
            charRelocationToBoard,
            charRelocationFromBoard,
            checkAnswer,
            incrementCorrentQuestion,
        }
    )(Main)
