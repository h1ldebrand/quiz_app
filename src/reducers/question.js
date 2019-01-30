// Actions's types import
import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATE_FROM_BOARD_TO_PROPOSITION,
    CHECK_ANSWER,
    INCREMENT_CORRECT_QUESTIONS
} from "../constants/question";

// Initial states for reducers
const INITIAL_STATE = {
    question: {},
    totalCount : 0,
    correctAnswers: 0,
    arrayInProposition: [],
    arrayOnBoard : [],
    checkAnswerCondition: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_QUESTION:
            return {
                ...state,
                question: action.payload,
                arrayInProposition: action.payload.transformedAnswer
            };
        case INCREMENT_QUESTIONS_COUNT:
            return {
                ...state,
                arrayOnBoard : [],
                totalCount: ++state.totalCount
            };
        case RELOCATE_FROM_PROPOSITION_TO_BOARD:
            const arrayInProposition = state.arrayInProposition.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                arrayInProposition,
                arrayOnBoard: [...state.arrayOnBoard, action.payload]
            }
        case RELOCATE_FROM_BOARD_TO_PROPOSITION:
            const arrayOnBoard = state.arrayOnBoard.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                arrayOnBoard,
                arrayInProposition: [...state.arrayInProposition, action.payload]
            }
        case CHECK_ANSWER:
            const userAnswer = state.arrayOnBoard.reduce((result, item) => (result += item.name), '');
            return {
                ...state,
                checkAnswerCondition: (state.question.answer === userAnswer)
            }
        case INCREMENT_CORRECT_QUESTIONS:
            return {
                ...state,
                arrayOnBoard : [],
                correctAnswers: ++state.correctAnswers,
                totalCount: ++state.totalCount
            }

        default:
            return state;
    }
}
