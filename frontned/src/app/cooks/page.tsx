'use client'

import styles from "./page.module.css";
import { createRecipe } from "./actions";
import { useState } from "react";

export default function Page() {
    const [recipeName, setRecipeName] = useState<string>()
    return (
        <>
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
                    onClick={() => {
                        if (recipeName != null && recipeName !== "") {
                            createRecipe("テスト");
                        } else {
                            console.error("必須項目")
                        }
                    }}>登録</button>
            </div>
        </>
    );
}
