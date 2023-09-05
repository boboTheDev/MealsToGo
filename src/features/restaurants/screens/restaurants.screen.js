import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import React from 'react';

import { RestaurantInfo } from '../components/restaurantInfo.component';

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'blue',
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: '#DEDC31 ',
    flex: 1,
    padding: 15,
  },
});
