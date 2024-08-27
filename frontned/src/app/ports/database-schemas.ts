import { RowDataPacket } from "mysql2";

export interface Recipe extends RowDataPacket {
  recipe_id: number;
  name: string;
}
