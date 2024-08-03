"use server";

import { pool } from "@/app/libs/database";

export const createRecipe = (name: string) => {
  pool.getConnection().then((conn) => {
    conn.execute(`insert into recipe(name) values ('${name}')`);
  });
};
