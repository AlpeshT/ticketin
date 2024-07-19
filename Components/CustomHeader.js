import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Event</Text>
            <Ionicons name="ellipsis-horizontal-outline" size={24} color="white" />
        </View>
    );
}
const styles = StyleSheet.create({

    header: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // center vertically too
        padding: 10, // Optional padding
        height: 118,
        width: '100%',
        zIndex: 999,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleIOS: {
        // Styles for centering title on iOS (e.g., flex: 1, textAlign: 'center')
    },
    titleAndroid: {
        // Styles for centering title on Android (might involve margin adjustments)
    },
});
export default CustomHeader;