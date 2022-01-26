import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import useLocation from "../hooks/useLocation";

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
    flex: 1,
  },
  bottomWidget: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: "2.5%",
    backgroundColor: "#fff",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    zIndex: 5,
  },
  whereContainer: {
    margin: "2.5%",
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "2.5%",
    paddingVertical: 8,
    marginBottom: 20,
  },
  whereTo: {
    fontSize: 22.5,
    color: "#000",
  },
});


export default function Map() {
  const { text, location } = useLocation();
  const [geoLocation, setGeoLocation] = useState([]);
  
  useEffect(() => {
    setGeoLocation(location);
    console.log("geoLocation", geoLocation);
  }, [geoLocation, location]);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: geoLocation?.coords?.latitude || 0,
          longitude: geoLocation?.coords?.longitude || 0,
          latitudeDelta: 0.045,
          longitudeDelta: 0.045,
        }}
        region={{
          latitude: geoLocation?.coords?.latitude || 0,
          longitude: geoLocation?.coords?.longitude || 0,
          latitudeDelta: 0.045,
          longitudeDelta: 0.045,
        }}
        camera={{
          center: {
            latitude: geoLocation?.coords?.latitude || 0,
            longitude: geoLocation?.coords?.longitude || 0,
          },
          heading: 1,
          pitch: 1,
          zoom: 1,
          altitude: 1,
        }}
        showsCompass={true}
        rotateEnabled={false}
        showsTraffic={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
      ></MapView>
      <View style={styles.bottomWidget}>
        <View style={styles.whereContainer}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
}