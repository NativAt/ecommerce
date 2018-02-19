import axios from 'axios';
import { GET_FLIGHTS } from './FlightsTypes';
import { ROOT_URL, API_KEY } from '../../config';

export const getFlights = () => {
  return async function(dispatch) {
    let request;
    try {
      request = await axios.get(`${ROOT_URL}?origin=LON&destination=DUB&departure_date=2016-03-25&currency=EUR&apikey=${API_KEY}`)
    } catch (err) {
      // complete
    }
    
    dispatch({
      type: GET_FLIGHTS,
      payload: request
    });
  }
}