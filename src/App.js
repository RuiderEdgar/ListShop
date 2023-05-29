import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ShoppingList from './components/ShoppingList/ShoppingList';
import { Header } from './components/Header/Header';

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header/>
          <Text>Hola mundo</Text>
          <StatusBar style="auto" />
          <ShoppingList/>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
