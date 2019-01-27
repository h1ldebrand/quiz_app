//Node modules import
import axios from 'axios';

//receives a random question
export const fetchQuestion = (action) => {
    return () => {
        return axios.get('http://jservice.io/api/random')
            .then((response) => {console.log(response)})
    }
}
