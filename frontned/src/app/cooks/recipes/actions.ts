"use server";

import { pool } from "@/app/ports/database";
import { Recipe } from "@/app/ports/database-schemas";

export const createRecipe = async (name: string) => {
  const con = await pool.getConnection();

  try {
    con.execute(`insert into recipe(name) values ('${name}')`);
  } catch (e) {
    await con.rollback();
    throw e;
  }
};

export const fetchRecipes = async (): Promise<RecipeModel[]> => {
  const con = await pool.getConnection();

  try {
    const [results] = await con.query<Recipe[]>(
      `select recipe_id, name from recipe`
    );

    console.log(results);

    return results.map((o) => ({ recipeId: o.recipe_id, name: o.name }));
  } catch (e) {
    throw e;
  }
};
