import * as educationActions from '../actions/actions'
import initialState from './initialState.json'
const educationReducer = (state=initialState.education, actions) => {
    switch(actions.type){
        case educationActions.SET_EDUCATION:
            return {...actions.payload}
        case educationActions.UPDATE_EDUCATION:
            return {...actions.payload}
        default:
            return state
    }
}

export default educationReducer;