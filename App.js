import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import NotificationsScreen from "./src/screens/NotificationScreen";
import MyProductScreen from "./src/screens/MyProductScreen";
import AuthResolveScreen from "./src/screens/AuthResolveScreen";
import InBoxScreen from "./src/screens/InBoxScreen";
import AddProductScreen from "./src/screens/AddProductScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigate, setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  AuthResolve: AuthResolveScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    productFLow: createStackNavigator({
      MyProduct: MyProductScreen,
      AddProduct: AddProductScreen,
    }),
    Account: AccountScreen,
    Notifications: NotificationsScreen,
    InBox: InBoxScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  );
};
