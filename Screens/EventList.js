import React, { useEffect, useTransition } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fetchEvents, eventListState } from '../atoms';

const EventList = ({ navigation }) => {
    const [isPending, startTransition] = useTransition();
    const setEventList = useSetRecoilState(eventListState);
    const events = useRecoilValue(fetchEvents);
    useEffect(() => {
        const fetchData = () => {
            const data = events; // Assuming fetchEvents returns a promise
            startTransition(() => {
                setEventList(data);
            });
        };

        fetchData();
    }, [events, setEventList, startTransition]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('EventDetail', item)}>
            <Text style={styles.event}>{item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event List</Text>
            {isPending ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 16,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    event: {
        fontSize: 18,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default EventList;