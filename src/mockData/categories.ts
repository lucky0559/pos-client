import { Category } from "../types/category";

export const categories: Category[] = [
  {
    id: 1,
    name: "Breakfast",
    items: [
      {
        id: 2,
        name: "Eggsilog",
        price: 80
      },
      {
        id: 3,
        name: "Bacsilog",
        price: 148
      }
    ]
  },
  {
    id: 4,
    name: "Drinks",
    items: [
      {
        id: 5,
        name: "Iced coffee",
        price: 176
      },
      {
        id: 6,
        name: "Java Chip Cream",
        price: 210
      }
    ]
  },
  {
    id: 7,
    name: "Soup",
    items: [
      {
        id: 8,
        name: "Mushroom Soup",
        price: 100
      },
      {
        id: 9,
        name: "Chicken Soup",
        price: 120
      }
    ]
  },
  {
    id: 10,
    name: "Alcohol",
    items: [
      {
        id: 11,
        name: "Soju",
        price: 210
      },
      {
        id: 12,
        name: "Redhorse",
        price: 220
      }
    ]
  }
];
