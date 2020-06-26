// Reducers import
import reducers from './reducers';

export type QuestionType = {
    airdate: string // date format
    answer: string
    category: CategoryType
    category_id: number
    created_at: string // date format
    game_id: null
    id: number
    invalid_count: null
    question: string
    updated_at: string // date format
    value: number
}

export type FetchingQuestionType = {
    id: number
    answer: string
    transformedAnswer: Array<CharType>,
    question: string
    category: string

}

export type CategoryType = {
    clues_count: number
    created_at: string // date format
    id: number
    title: string
    updated_at: string
}

export type CharType = {
    id: number
    name: string
}

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

type RootReducerType = typeof reducers; // (globalstate: AppStateType) => AppStateType

export type AppStateType = ReturnType<RootReducerType>
