import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';
import Geolocation from '@react-native-community/geolocation';

export default function App() {
  getUserLocationHandler = () => {
      Geolocation.getCurrentPosition(
        position => { console.log(position);
        }, err => console.log(err),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
  }

  return (
    <View style={styles.container}>
      <FetchLocation onGetLocation={this.getUserLocationHandler}/>
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
