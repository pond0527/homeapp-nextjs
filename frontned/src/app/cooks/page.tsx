'use client'

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

export default function Page() {
    return (
        <div>
            <Link href="/cooks/recipes" legacyBehavior><a>レシピ一覧へ</a></Link>
        </div>
    );
}
