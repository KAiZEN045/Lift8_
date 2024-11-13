import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
    </SafeAreaView>
  );
}

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
    fontFamily: 'PoppinsBold',
    color: '#333',
  },
});
