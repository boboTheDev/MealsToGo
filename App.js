import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="dark" />
    </>
  );
}
