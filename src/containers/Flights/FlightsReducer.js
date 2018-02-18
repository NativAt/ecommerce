import {
  GET_FLIGHTS
} from './FlightsTypes';


export default (state = {}, action) => {
  switch(action.type) {
    case GET_FLIGHTS:
      return action.payload;
        
    default:
      return state
  }
}