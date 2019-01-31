import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import CustomDrawerContent from "./src/components/CustomDrawerContent";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const drawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    }
  },
  {
    contentComponent: CustomDrawerContent
  }
);

const AppContainer = createAppContainer(drawerNavigator);
