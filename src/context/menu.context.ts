import { createContext } from "react";
import { Item } from "../types/item";

type MenuContextType = {
  selectedCategory?: number;
  items?: Item[];
  cartItems?: Item[];
  actions: {
    setCategory?: (val: number) => void;
    onModifyItem?: (action: string, item: Item) => void;
    onDeleteCardItem?: (id: number) => void;
  };
};

export const MenuContext = createContext<MenuContextType | null>(null);
