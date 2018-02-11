import {
  SELECT_CHANGE,
  INIT_FILTERS,
} from './MultipleChoicesTypes'


export const selectChange = (name, value) => {
  return dispatch => {
    dispatch({
      type: SELECT_CHANGE,
      payload: { [name]: value }
    })
  }
}

export const initFilters = () => {
  return dispatch => {
    const filterArr = ['Nike', 'Adidas', 'Crocs'];
    dispatch({
      type: INIT_FILTERS,
      payload: filterArr
    })
  }
}