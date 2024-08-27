'use client'

import { Recipe } from "@/app/ports/database-schemas";
import { fetchRecipes } from "../actions";
import { useState, useEffect } from "react";
import Link from "next/link";

export const RecipeList = (): JSX.Element => {
    const [recipes, setRecipes] = useState<RecipeModel[]>()

    useEffect(() => {
        fetchRecipes().then(recipes => {
            setRecipes(recipes);
        })
    }, []);

    return (
        <div>
            <h1>レシピ一覧</h1>

            <div style={{
                display: "flex",
            }}>
                <span>{JSON.stringify(recipes)}</span>
                <button className="form-button">
                    <Link href="/cooks/recipes/create" legacyBehavior><a>新規登録</a></Link>
                </button>
            </div>

            <table border={1}>
                <thead>
                    <tr>
                        <th>レシピID</th>
                        <th>レシピ名</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes?.map(recipe => (
                        <tr key={recipe.recipeId}>
                            <td>{recipe.recipeId}</td>
                            <td>{recipe.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
