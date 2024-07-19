import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SheetProvider, SheetManager, registerSheet } from 'react-native-actions-sheet';
import { LinearGradient } from "expo-linear-gradient";
import CustomActionSheet from '../Components/ActionSheet';
import { useRoute } from '@react-navigation/native';

const EventDetail = () => {
    const route = useRoute();
    registerSheet("event-sheet", CustomActionSheet);
    useEffect(() => {
        setTimeout(() => {
            SheetManager.show("event-sheet", {
                payload: route.params,
            });

        }, 100)
    }, []);
    useEffect(() => {
        return (() => {
            SheetManager.hide("event-sheet");
        })
    }, [])

    return (
        <>
            <SheetProvider>
                <View style={styles.container}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.6)', "rgba(64, 64, 64, 0.582)", 'rgba(102, 102, 102, 0)']}
                        end={{ x: 0.5, y: 0 }}
                        start={{ x: 0.5, y: 1 }}
                        locations={[1, 0.515, 0.006]}
                        style={styles.gradientContainer}
                    >
                        <Image source={require('../assets/event.png')} resizeMode="cover" style={styles.image} />
                    </LinearGradient>
                </View>
            </SheetProvider>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        zIndex: -1
    },
    header: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // center vertically too
        padding: 10, // Optional padding
        height: 118,
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center', // Center the title text
        color: 'white',
        width: 80
    },
    gradientContainer: {
        justifyContent: 'center', // Align content vertically
        alignItems: 'center', // Align content horizontally
        // height: 380
    },
});

export default EventDetail;