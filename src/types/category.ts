import { Item } from "./item";

export type Category = {
  categoryId: number;
  name: string;
  items: Item[];
};
