import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BTCMAX</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },  text: {
    color:'white',
    fontSize:20,
  },
});
