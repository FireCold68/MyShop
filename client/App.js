import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    getData();

  },[]);

  const getData = async() => {
    const url = "htttp://192.168.1.1:3001/api/products/sayHello";
    const response = await fetch(url, {
      method: 'get'
    });
    const data = await response.json();
    setMessage(data.message)

  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
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
