import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    getData();

  },[]);

  const getData = async() => {
    const url = "htttp://localhost:3001/api/products/sayHello";
    const response = fetch(url, {
      method: 'get'
    });
    const data = (await response).json();

    console.log(data)

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
