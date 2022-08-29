import { Request, Response } from "express"
import { RecipeModel } from "../models"
import { ObjectId } from "mongodb"


interface Query {
  _id: ObjectId
}

export const recipeMiddleware = async (
  req: Request,
  res: Response,
): Promise<void> => {
  // DONE fetch and return a recipe
  const { id } = req.body

  const query: Query = {
    _id: ObjectId(id)
  }
  const foundRecipe = await RecipeModel.findOne(query)
  res.send(foundRecipe)
}
