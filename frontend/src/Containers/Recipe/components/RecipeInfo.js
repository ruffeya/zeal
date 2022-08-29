
import React from "react"

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


const RecipeInfo = ({ recipe }) => (
  <>
    <Box sx={{mb: 5}}>
      <Typography variant="h6"> Ingredients </Typography>
      {recipe.ingredients?.map((row) => (
        <Typography variant="body1" key={row._id}>
          {row.amount} {row.unit} {row.name}
        </Typography>
      ))}
    </Box>


    <Box sx={{mb: 5}}>
      <Typography variant="h6"> Instructions </Typography>
      <Typography>
        {recipe.instructions}
      </Typography>
    </Box>

  </>
)

export default RecipeInfo
