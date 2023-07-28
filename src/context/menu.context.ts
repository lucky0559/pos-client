import { createContext } from "react";
import { Item } from "../types/item";

type MenuContextType = {
  selectedCategory?: number;
  items?: Item[];
  actions: {
    setCategory?: (val: number) => void;
    onModifyItem?: (action: string, id: number) => void;
  };
};

export const MenuContext = createContext<MenuContextType | null>(null);
