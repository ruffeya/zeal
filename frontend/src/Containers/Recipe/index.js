// DONE Create a connected component to render a fetched recipe

import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import CircularProgress  from "@material-ui/core/CircularProgress"
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'


import RecipeInfo from "./components/RecipeInfo"
import * as actions from "../../actions"

class Recipe extends Component { 
  handleClose = () => {
    this.props.clearRecipe()
  }

  render() {
    const { recipe, isLoading } = this.props
    if (!recipe) return null

    return (
      <Dialog
        fullScreen
        open
        onClose={this.handleClose}
      >
        <DialogTitle>
          <Toolbar disableGutters>
            <IconButton
              aria-label="close"
              onClick={this.handleClose}
            >
                <CloseIcon />
            </IconButton>
            <Typography variant="h5">
              {recipe.name}
            </Typography>
          </Toolbar>
        </DialogTitle>
        <DialogContent>
            {isLoading && <CircularProgress />}
            {!isLoading && <RecipeInfo recipe={recipe} />}
        </DialogContent>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearRecipe: actions.clearRecipe,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
