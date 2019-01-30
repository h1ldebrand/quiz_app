//Node modules import
import axios from 'axios';

// Actions types import
import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATE_FROM_BOARD_TO_PROPOSITION,
    CHECK_ANSWER
} from "../constants/question";

// functions import
import { answerTrans, randomizeItems } from '../functions/answer-transformation';

//receives a random question
export const fetchQuestion = (action) => {
    return (dispatch) => {
        return axios.get('http://jservice.io/api/random')
            .then((response) => {
                const { id, answer, question, category }  = response.data[0];
                dispatch({
                    type: FETCH_QUESTION,
                    payload: {
                        id,
                        answer,
                        transformedAnswer: randomizeItems(answerTrans(answer)),
                        question,
                        category: category.title
                     }
                })
            })
    }
}

export const incrementQuestionsCount = () => {
    return {
        type: INCREMENT_QUESTIONS_COUNT
    }
}


export const charRelocationToBoard = (char) => {
    return {
        type: RELOCATE_FROM_PROPOSITION_TO_BOARD,
        payload: char
    }
}

export const charRelocationFromBoard = (char) => {
    return {
        type: RELOCATE_FROM_BOARD_TO_PROPOSITION,
        payload: char
    }
}

export const checkAnswer = () => {
    return {
        type : CHECK_ANSWER
    }
}
