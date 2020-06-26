import {CharType} from "../types";

export const answerTrans = (word: string): Array<CharType> => {
    if(word){
        return word.split('').reduce((wordTrans, value, index) => (
            [...wordTrans, {id: index + 1 , name: value}]
        ), [])
    }

}

export const randomizeItems = (arr: Array<CharType>): Array<CharType> => {
    return [...arr].sort(() => 0.5 - Math.random())
}
