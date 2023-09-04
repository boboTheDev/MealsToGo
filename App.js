import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === "android";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
        <View style={{margin: "20px",backgroundColor: "#C1FF5D"}}>
          <Text>SEARCH BAR</Text>
        </View>
        <View style={{flex: 1, backgroundColor: "#DE3163"}}>
          <Text>FOOD LIST</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="dark"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
