import { Item } from "./item";

export type Category = {
  id: number;
  name: string;
  items: Item[];
};
