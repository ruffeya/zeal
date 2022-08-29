import React, { useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { useNavigate } from "react-router-dom"
import Input from "@material-ui/core/Input"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"

import * as actions from "../../actions"
import { HomeWrapper, StyledListItem } from "./styles"

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"]


export const Home = ({ recipes, isLoading, searchRecipes, setRecipe }) => {
  
  const [term, setTerm] = useState("")
  const [ingredients, setIngredients] = useState(["milk"])
  let navigate = useNavigate()
  
  const fetchSearch = () => {
    // DONE: something is missing here for fetching
    searchRecipes({ name: term, ingredients })
  }
  const goToRecipe = (recipe) => {
    setRecipe(recipe)
    navigate(`/recipes/${recipe.id}`)
  }

  const handleSearch = (event) => {
    setTerm(event.target.value)
  }

  const handleIngredient = (ingredient, event) => {
    const newIngredients  =  [...ingredients]
    if (event.target.checked) {
      newIngredients.push(ingredient)
    } else {
      const foundIngredient = newIngredients.indexOf(ingredient)
      newIngredients.splice(foundIngredient, 1)
    }
    setIngredients(newIngredients)
  }

  return (
    <HomeWrapper>
      <Input
        autoFocus={true}
        fullWidth={true}
        onChange={(event) => handleSearch(event)}
        value={term}
      />
      <div>
        <h3>Ingredients on hand</h3>
        {ingredientList.map((ingredient) => (
          <FormControlLabel
            key={ingredient}
            control={
              <Checkbox
                checked={ingredients.includes(ingredient)}
                onChange={(event) => handleIngredient(ingredient, event)}
                value={ingredient}
              />
            }
            label={ingredient}
          />
        ))}
      </div>
      <Button onClick={() => fetchSearch()}>search</Button>
      <Divider />
      {recipes && (
        <List>
          {recipes.map((recipe) => (
            <StyledListItem key={recipe.id} onClick={() => goToRecipe(recipe)}>
              <ListItemText primary={recipe.name} />
            </StyledListItem>
          ))}
        </List>
      )}
      {isLoading && <LinearProgress />}
      <Divider />
    </HomeWrapper>
  )
}

const mapStateToProps = (state) => {
  const { search } = state
  return { ...search }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchRecipes: actions.searchRecipes,
      setRecipe: actions.setRecipe,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
