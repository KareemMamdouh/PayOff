import { GET_ALL_BANK,GET_BANK_CREDIT_CARDS,GET_DURATION_BY_AMOUNT} from "../actions/types";
const initialState = {

}
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_BANK:
      return {
        ...state,
        AllBanks: action.payload
      };
    case GET_BANK_CREDIT_CARDS:
      return {
        ...state,
        BankCreditsCards: { ...state.BankCreditsCards, [action.i]: action.payload }
      };
    case GET_DURATION_BY_AMOUNT:
    return {
      ...state,
      Duration: action.payload
    };
    
    
    default:
      return state;
  }
};
