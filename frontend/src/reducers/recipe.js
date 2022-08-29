/*
  DONE: Create reducer and state updates here for recipe
*/

import { GET_RECIPE, RECEIVE_RECIPE, FAIL_RECIPE, CLEAR_RECIPE } from "../actions"

const initialState = {
  recipe: null,
  isLoading: false,
  error: null,
}

const recipeFetching = (state, payload) => {
  return { ...state, isLoading: true, recipe: payload }
}

const recipeFetched = (state, payload) => {
  return { ...state, isLoading: false, recipe: payload }
}

const recipeFailed = (state, payload) => {
  return { ...state, isLoading: false, error: payload }
}

const recipeClear = (state) => {
  return { ...state, ...initialState }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPE:
      return recipeFetching(state, payload)
    case RECEIVE_RECIPE:
      return recipeFetched(state, payload)
    case FAIL_RECIPE:
      return recipeFailed(state, payload)
    case CLEAR_RECIPE:
      return recipeClear(state)
    default:
      return state
  }
}