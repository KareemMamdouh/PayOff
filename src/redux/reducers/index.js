import { combineReducers } from 'redux'
import Bank from './Bank';
import User from './User';
import Errors from './Errors';

export default combineReducers({
    Bank: Bank,
    User: User,
    Errors: Errors,

})
