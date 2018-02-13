import {
  RADIO_CHANGE,
  INIT_RADIO_FILTERS,
} from './RadioButtonTypes'


export const radioChange = (name, value) => {
  return dispatch => {
    dispatch({
      type: RADIO_CHANGE,
      payload: { [name]: value }
    })
  }
}

export const initRadioFilters = () => {
  return dispatch => {
    const filterArr = { 'Nike': false, 'Adidas': false, 'Crocs': false };
    dispatch({
      type: INIT_RADIO_FILTERS,
      payload: filterArr
    })
  }
}