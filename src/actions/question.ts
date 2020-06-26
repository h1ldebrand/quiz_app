//Node modules import
// Actions types import
import {
    CHECK_ANSWER,
    FETCH_QUESTION,
    INCREMENT_CORRECT_QUESTIONS,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_BOARD_TO_PROPOSITION,
    RELOCATE_FROM_PROPOSITION_TO_BOARD
} from "../constants/question";
import {CharType, FetchingQuestionType, QuestionType} from "../types";
import axios, {AxiosResponse} from "axios";
import {answerTrans, randomizeItems} from "../functions/answer-transformation";
// functions import

export const fetchQuestion = () => {
    return (dispatch: any) => {
        return axios.get('http://jservice.io/api/random')
            .then((response: AxiosResponse<Array<QuestionType>>) => {
                const {id, answer, question, category} = response.data[0];
                dispatch(fetchQuestionAction({
                    id,
                    answer,
                    transformedAnswer: randomizeItems(answerTrans(answer)),
                    question,
                    category: category.title
                }))
            })
    }
}

export const fetchQuestionAction = (payload: FetchingQuestionType) => {
    return {
        type: FETCH_QUESTION,
        payload
    } as const
}

export const incrementQuestionsCount = () => {
    return {
        type: INCREMENT_QUESTIONS_COUNT
    } as const
}


export const charRelocationToBoard = (char: CharType) => {
    return {
        type: RELOCATE_FROM_PROPOSITION_TO_BOARD,
        payload: char
    } as const
}


export const charRelocationFromBoard = (char: CharType) => {
    return {
        type: RELOCATE_FROM_BOARD_TO_PROPOSITION,
        payload: char
    } as const
}

// Checks answer
export const checkAnswer = () => {
    return {
        type : CHECK_ANSWER
    } as const
}

// Increment the correct answer count
export const incrementCorrentQuestion = () => {
    return {
         type: INCREMENT_CORRECT_QUESTIONS
    } as const
}

export default {
    fetchQuestionAction,
    incrementQuestionsCount,
    charRelocationToBoard,
    charRelocationFromBoard,
    checkAnswer,
    incrementCorrentQuestion
}
