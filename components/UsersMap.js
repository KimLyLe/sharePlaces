import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-map';

const usersMap = props => {
    retrun (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}></MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default usersMap;