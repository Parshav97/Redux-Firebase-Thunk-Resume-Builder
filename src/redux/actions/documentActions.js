import * as documentActions from '../actions/actions'
import { v4 as uuidv4 } from 'uuid';
export const setDocument = (skindCd) => {
    return {
        type:documentActions.SET_SKIN,
        payload:{
            id:uuidv4(),
            skinCd:skindCd
        }
    }
}

export const updateDocument = (skindCd) => {
    return {
        type:documentActions.UPDATE_SKIN,
        payload:{
            skinCd:skindCd
        }
    }
}