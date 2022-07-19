import {combineReducers} from 'redux'

import contactReducer from './contactReducer'
import documentReducer from './documentReducer'
import educationReducer from './educationReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    document:documentReducer,
    education:educationReducer,
    contact:contactReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth: authReducer
})

export default rootReducer