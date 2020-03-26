import {
        HANDLE_ERROR_GLOBAL,
        ERROR_MESSAGE_BACK_END,
        RESET_ERRORS
} from '../actions/types'
export default (state=[],action)=>{
    switch (action.type){
        case ERROR_MESSAGE_BACK_END:
                return {
                    ...state,
                    errorMessageBackEnd:action.payload
                    };
        case HANDLE_ERROR_GLOBAL:
                return {
                    ...state,
                    errorGlobal:true
                    };
        case RESET_ERRORS:
            return {
                ...state,
                errorMessageBackEnd:false,
                errorGlobal:false
                };
                default:
            return state
    }
} 