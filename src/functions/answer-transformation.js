export const answerTrans = (word) => {
    if(word){
        return word.split('').reduce((wordTrans, value, index) => (
            [...wordTrans, {id: index + 1 , name: value}]
        ), [])
    }
    return false;
}

export const randomizeItems = (arr) => {
    return [...arr].sort(() => 0.5 - Math.random())
}
