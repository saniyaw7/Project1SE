import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Home from './Home';

const Stack =  createNativeStackNavigator();

export default function App(){

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

function Login({navigation}){
  return(
    
    <View style={styles.container}>
     
      <View style={styles.form}>
        <Text> Username:</Text>
        <TextInput style={styles.input}></TextInput>
        <Text >Password: </Text>
        <TextInput style={styles.input}></TextInput>
        <Button title='Login' onPress={()=> navigation.navigate('Home')}/>
      </View>
</View>

  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',

},
form:{
  borderRadius:15,
  backgroundColor:"white"
},
input:{
  padding:2,
  borderWidth:1,
}
});
