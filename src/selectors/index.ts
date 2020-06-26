import { AppStateType } from '../types'

export const getQuestion = (state: AppStateType) => state.questions.question;
export const getTotalCount = (state: AppStateType) => state.questions.totalCount;
export const getArrayInProposition = (state: AppStateType) => state.questions.arrayInProposition;
export const getArrayOnBoard = (state: AppStateType) => state.questions.arrayOnBoard;
export const isCheckAnswerCondition = (state: AppStateType) => state.questions.checkAnswerCondition;
export const getCorrectAnswers = (state: AppStateType) => state.questions.correctAnswers;
