import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Map = () => {
	return (
        <View>
            <MapView
                provider = {PROVIDER_GOOGLE}
                style={styles.map} 
                initialRegion={{
                    latitude:22.337522,
                    latitudeDelta:0.009,
                    longitude:114.262963,
                    longitudeDelta:0.009
                }}
            >
                <Marker
                    coordinate = {{latitude:22.337522, longitude:114.262963}}
                    title = {'Entrance Piazza'}>
                </Marker>
                <Marker
                    coordinate = {{latitude:22.335035, longitude:114.263849}}
                    title = {'Cheng Yu Tung Building'}>
                </Marker>
                <Marker
                    coordinate = {{latitude:22.333366, longitude:114.264960}}
                    title = {'Cheng Yu Tung Building'}>
                </Marker>
                <Marker
                    coordinate = {{latitude:22.337683, longitude:114.263527}}
                    title = {'Bookstore'}>
                </Marker>
                <Marker
                    coordinate = {{latitude:22.337805, longitude:114.263451}}
                    title = {'Starbucks'}>
                </Marker>
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
	map:{
        height: 300
    }
})

export default Map;