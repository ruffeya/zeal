// DONE Create a connected component to render a fetched recipe

import React, { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { useParams } from "react-router-dom";
import CircularProgress  from "@material-ui/core/CircularProgress"
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import RecipeInfo from "./components/RecipeInfo"
import * as actions from "../../actions"

export const Recipe = ({ recipe, isLoading, fetchRecipe }) => { 
  let params = useParams();

  useEffect(() => {
    fetchRecipe({id: params.id})
  }, [params.id])
  
  if (!recipe && !isLoading) return null;
  return (
    <>
      <Toolbar disableGutters>
        <Typography variant="h5">
          {recipe?.name}
        </Typography>
      </Toolbar>

      {isLoading && <CircularProgress />}
      {!isLoading && <RecipeInfo recipe={recipe} />}
    </>
  )
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchRecipe: actions.fetchRecipe,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
