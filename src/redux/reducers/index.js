import { combineReducers } from 'redux'
import Campaigns from './Campaigns';
import User from './User';
import Errors from './Errors';

export default combineReducers({
    Campaigns: Campaigns,
    User: User,
    Errors: Errors,

})
