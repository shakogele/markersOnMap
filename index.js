import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";
import App from './App';
import {name as appName} from './app.json';

Navigation.registerComponent(`navigation.markersOnMap.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.markersOnMap.WelcomeScreen"
      }
    }
  });
});
