import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function SignupScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleName}>Create new account</Text>
        
        <TextInput style={styles.input} placeholder='Full Name'></TextInput>
        <TextInput style={styles.input} placeholder='Phone Number'></TextInput>
        <TextInput style={styles.input} placeholder='E-mail Address'></TextInput>
        <TextInput style={styles.input} placeholder='Password'></TextInput>
  
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleName: {
        padding: 20,
        fontSize: 30,
        marginTop: 50,
        fontWeight: 'bold',
        color: 'red'
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        width: 290,
        marginLeft: 60,
        padding: 10,
        marginTop: 20,
    },
    signupButton: {
        backgroundColor: 'red',
        borderRadius: 20,
        width: 220,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 20,
        paddingVertical: 10,
    },
    textButton: {
        color: 'white',
    }
});