import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default function Map() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }


      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync()
      

      setLatitude(latitude);
      setLongitude(longitude);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (latitude && longitude) {
    text= "Latitude:" + latitude + " / Longitude:" + longitude
  }
  console.log(text);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.010,
          longitudeDelta: 0.010,
        }}
      >
        <Text>{latitude}</Text>
        
      </MapView>
    </View>
  );
}