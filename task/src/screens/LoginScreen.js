import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signinName}>Sign In</Text>
      
      <TextInput style={styles.input} placeholder='E-mail or phone number'></TextInput>
      <TextInput style={styles.input} placeholder='Password'></TextInput>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.textButton}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.textOR}>OR</Text>

      <TouchableOpacity style={styles.facebookLoginButton}>
        <Text style={styles.textButton}>Login with Facevook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0
  },
  signinName: {
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red'
  },
  input: {
    height: 40,
    width: 290,
    marginLeft: 65,
    margin: 12,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1
  },
  loginButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 100,
    paddingHorizontal: 80,
    paddingVertical: 10,
    marginTop: 20
  },
  textButton: {
    color: 'white'
  },
  textOR: {
    display: 'flex',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  facebookLoginButton: {
    backgroundColor: '#1877F2',
    borderRadius: 20,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 100,
    paddingVertical: 10,
    marginTop: 20
  }
});
