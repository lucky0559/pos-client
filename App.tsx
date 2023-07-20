import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login/Login";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { client } from "./src/lib/api-apollo-graphql/client";
import MenuScreen from "./src/screens/menu/menu";

export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
