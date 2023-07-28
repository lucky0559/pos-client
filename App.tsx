import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login/Login";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/lib/api-apollo-graphql/client";
import MenuScreen from "./src/screens/menu/Menu";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./theme.json";
import { useMemo, useState } from "react";
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
      return category.id === selectedCategory;
    });
    return items[0]?.items;
  }, [selectedCategory]);

  const onModifyItem = (action: string, id: number) => {
    switch (action) {
      case "+":
        return console.log("plus", id);
      case "-":
        return console.log("minus", id);
      default:
        break;
    }
  };

  const MenuContextValue = {
    selectedCategory,
    items,
    actions: {
      setCategory,
      onModifyItem
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
