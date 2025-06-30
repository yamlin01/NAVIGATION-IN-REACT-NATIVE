import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titleName}>Say Hello to your new app</Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleName: {
    padding: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 100,
  },
  loginButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: 220,
    alignItems: 'center',
    paddingHorizontal: 80,
    paddingVertical: 10,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupButton: {
    borderWidth: 1,
    borderColor: 'red',
    width: 220,
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center'
  }
});

export default HomeScreen;
