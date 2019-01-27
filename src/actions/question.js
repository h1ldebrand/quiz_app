//Node modules import
import axios from 'axios';

// Actions types import
import {FETCH_QUESTION} from "../constants/question";

//receives a random question
export const fetchQuestion = (action) => {
    return (dispatch) => {
        return axios.get('http://jservice.io/api/random')
            .then((response) => {
                const {
                    id, answer, question,
                    category
                    }  = response.data[0];
                // console.log(response.data[0])

                dispatch({
                    type: FETCH_QUESTION,
                    payload: {
                        id, answer, question, category: category.title
                    }
                })
            })
    }
}
