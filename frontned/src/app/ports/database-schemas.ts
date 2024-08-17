import { RowDataPacket } from "mysql2";

export interface Recipe extends RowDataPacket {
  recipeId: number;
  name: string;
}
