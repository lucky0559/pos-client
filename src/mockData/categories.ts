import { Category } from "../types/category";

export const categories: Category[] = [
  {
    categoryId: 1,
    name: "Breakfast",
    items: [
      {
        itemId: 2,
        name: "Eggsilog",
        price: 80
      },
      {
        itemId: 3,
        name: "Bacsilog",
        price: 148
      }
    ]
  },
  {
    categoryId: 4,
    name: "Drinks",
    items: [
      {
        itemId: 5,
        name: "Iced coffee",
        price: 176
      },
      {
        itemId: 6,
        name: "Java Chip Cream",
        price: 210
      }
    ]
  },
  {
    categoryId: 7,
    name: "Soup",
    items: [
      {
        itemId: 8,
        name: "Mushroom Soup",
        price: 100
      },
      {
        itemId: 9,
        name: "Chicken Soup",
        price: 120
      }
    ]
  },
  {
    categoryId: 10,
    name: "Alcohol",
    items: [
      {
        itemId: 11,
        name: "Soju",
        price: 210
      },
      {
        itemId: 12,
        name: "Redhorse",
        price: 220
      }
    ]
  }
];
