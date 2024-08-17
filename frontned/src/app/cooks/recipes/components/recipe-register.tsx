'use client'

import styles from "../page.module.css";
import { createRecipe } from "../actions";
import { useEffect, useState } from "react";

export const RecipeRegister = (): JSX.Element => {
    const [recipeName, setRecipeName] = useState<string>()

    useEffect(() => () => {
        setRecipeName(undefined);
    }, []);


    return (
        <div>
            <h1>レシピ登録</h1>
            <div className={styles.main}>
                <input
                    type="text"
                    name="recipe"
                    placeholder="レシピ名"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)} />

                <button
                    disabled={recipeName == null || recipeName === ""}
                    onClick={async () => {
                        if (recipeName != null && recipeName !== "") {
                            createRecipe(recipeName);
                        } else {
                            console.error("必須項目")
                        }
                    }}>登録</button>
            </div>
        </div>
    );
}
