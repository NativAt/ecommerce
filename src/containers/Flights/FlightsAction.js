import axios from 'axios';
import { GET_FLIGHTS } from './FlightsTypes';
import { ROOT_URL, API_KEY } from '../../config';

export const getFlights = () => {
  return async function(dispatch) {
    let request;
    try {
      request = await axios.get(`${ROOT_URL}?origin=LON&destination=DUB&departure_date=2018-03-25&return_date=2018-03-29&currency=EUR&apikey=${API_KEY}`)
    } catch (err) {
      request = err;
    }
    
    dispatch({
      type: GET_FLIGHTS,
      payload: request
    });
  }
}