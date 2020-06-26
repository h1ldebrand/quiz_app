//Node modules import
import { combineReducers } from "redux";

import questionsReducer from './question';

const rootReducer = combineReducers({
    questions: questionsReducer
})

export default rootReducer;
