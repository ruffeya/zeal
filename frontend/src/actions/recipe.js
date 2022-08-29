/* DONE: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/

export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"
export const CLEAR_RECIPE = "CLEAR_RECIPE"

const fetchingRecipe = (payload) => ({
  type: GET_RECIPE,
  payload,
})

const fetchedRecipe = (payload) => ({
  type: RECEIVE_RECIPE,
  payload,
})

const failedRecipe = (payload) => ({
  type: FAIL_RECIPE,
  payload,
})

export const clearRecipe = () => ({
  type: CLEAR_RECIPE,
})

export const executeFetch = async (payload) => {
  const response = await fetch(`/api/recipe/${payload.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  const results = await response.json()
  return results
}

export const fetchRecipe = (payload) => {
  return (dispatch) => {
    dispatch(fetchingRecipe(payload))
    return executeFetch(payload)
      .then((res) => dispatch(fetchedRecipe(res)))
      .catch((err) => dispatch(failedRecipe(err)))
  }
}
