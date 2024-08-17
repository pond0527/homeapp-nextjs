'use client'

import { Recipe } from "@/app/ports/database-schemas";
import { fetchRecipes } from "../actions";
import { useState, useEffect } from "react";

type Props = { recipes: Recipe[] }
export const RecipeList = (): JSX.Element => {
    const [recipes, setRecipes] = useState<Recipe[]>()

    useEffect(() => {
        fetchRecipes().then(recipes => {
            console.log(recipes);
            setRecipes(recipes);
        })
    }, []);

    return (
        <div>
            <h1>レシピ一覧</h1>
            {JSON.stringify(recipes)}
            {/* <table border={1}>
                <tr>
                    <th>レシピID</th>
                    <th>レシピ名</th>
                </tr>
                {recipes.map(recipe => (
                    <tr key={recipe.recipeId}>
                        <td>{recipe.recipeId}</td>
                        <td>{recipe.name}</td>
                    </tr>
                ))}
            </table> */}
        </div>
    );
}
