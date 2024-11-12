import React from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Ready To Boom</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
  },
});

export default App;
