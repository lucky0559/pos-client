import { Category } from "../types/category";

export const categories: Category[] = [
  {
    id: 1,
    name: "Breakfast",
    items: [
      {
        id: 1,
        name: "Eggsilog",
        price: 80
      },
      {
        id: 2,
        name: "Bacsilog",
        price: 148
      }
    ]
  },
  {
    id: 2,
    name: "Drinks",
    items: [
      {
        id: 1,
        name: "Iced coffee",
        price: 176
      },
      {
        id: 2,
        name: "Java Chip Cream",
        price: 210
      }
    ]
  },
  {
    id: 3,
    name: "Soup",
    items: [
      {
        id: 1,
        name: "Mushroom Soup",
        price: 100
      },
      {
        id: 2,
        name: "Chicken Soup",
        price: 120
      }
    ]
  },
  {
    id: 4,
    name: "Alcohol",
    items: [
      {
        id: 1,
        name: "Soju",
        price: 210
      },
      {
        id: 2,
        name: "Redhorse",
        price: 220
      }
    ]
  }
];
