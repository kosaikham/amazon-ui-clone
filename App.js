import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const drawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(drawerNavigator);
