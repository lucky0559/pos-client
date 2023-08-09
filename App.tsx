import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login/Login";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/lib/api-apollo-graphql/client";
import MenuScreen from "./src/screens/menu/Menu";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./theme.json";
import { useEffect, useMemo, useState } from "react";
import { categories } from "./src/mockData/categories";
import { MenuContext } from "./src/context/menu.context";
import { Item } from "./src/types/item";

export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator();

  const [selectedCategory, setselectedCategory] = useState<number>();
  const [cartItems, setCartItems] = useState<Item[]>();

  const setCategory = (val: number) => {
    setselectedCategory(val);
  };

  const items = useMemo(() => {
    const items = categories.filter(category => {
      return category.categoryId === selectedCategory;
    });
    return items[0]?.items;
  }, [selectedCategory]);

  const onModifyItem = (action: string, item: Item) => {
    const modifiedItems = cartItems;
    const isExists = cartItems?.find(
      cartItem => cartItem.itemId === item.itemId
    );
    const index = cartItems?.findIndex(cartItem => {
      return cartItem.itemId === item.itemId;
    });
    switch (action) {
      case "+":
        if (isExists) {
          modifiedItems![index!].count = modifiedItems?.[index!].count! + 1;
          if (modifiedItems) {
            setCartItems([...modifiedItems]);
          }
        } else {
          item.count = 1;
          if (modifiedItems) {
            setCartItems([...modifiedItems, item]);
          } else {
            setCartItems([item]);
          }
        }
        return modifiedItems;
      case "-":
        if (isExists) {
          if (modifiedItems![index!].count === 1) {
            const filteredItems = modifiedItems?.filter(cartItem => {
              return cartItem.itemId !== item.itemId;
            });
            setCartItems(filteredItems);
          } else {
            modifiedItems![index!].count = modifiedItems?.[index!].count! - 1;
            if (modifiedItems) {
              setCartItems([...modifiedItems]);
            }
          }
        } else return;
        return modifiedItems;
      default:
        break;
    }
  };

  const onDeleteCardItem = (id: number) => {
    const filteredCartItems = cartItems?.filter(item => {
      return item.itemId !== id;
    });
    setCartItems(filteredCartItems);
  };

  const MenuContextValue = {
    selectedCategory,
    items,
    cartItems,
    actions: {
      setCategory,
      onModifyItem,
      onDeleteCardItem
    }
  };

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <MenuContext.Provider value={MenuContextValue}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              {/* <Stack.Screen name="Login" component={Login} /> */}
              <Stack.Screen name="Menu" component={MenuScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </MenuContext.Provider>
    </ApplicationProvider>
  );
}
