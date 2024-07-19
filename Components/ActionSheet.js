import React, { useRef } from 'react';
import {
    View, Text, Image, StyleSheet,
    TouchableOpacity
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { useNavigation } from '@react-navigation/native';

const CustomActionSheet = ({ sheetId, payload }) => {
    const actionSheetRef = useRef(null);
    const navigation = useNavigation();
    const BuyTickets = () => {
        navigation.navigate('Questionnaire', payload);
    }
    return (
        <View >
            <ActionSheet
                id={sheetId}
                ref={actionSheetRef}
                // closeOnTouchBackdrop={false}
                // closable={false}
                // backgroundInteractionEnabled={true}
                ExtraOverlayComponent={<View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.button} onPress={BuyTickets}>
                            <Text style={styles.buttonText}>Buy Tickets</Text>
                        </TouchableOpacity>
                    </View>
                </View>}
                defaultOverlayOpacity={0}
                containerStyle={{
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                }}
                indicatorStyle={{
                    width: 50,
                    height: 4,
                    backgroundColor: '#E0E0E0',
                    marginTop: 20
                }}
                gestureEnabled={true}>
                <View
                    style={{
                        padding: 30,
                        minHeight: 300,
                        width: '100%',
                    }}>
                    <View style={{ flexGrow: 1 }}>
                        <Text style={{
                            fontWeight: 600,
                            fontSize: 26,
                            lineHeight: 31.03,
                            marginBottom: 5
                        }}>{payload.name}</Text>
                        <Text style={{
                            fontWeight: 400,
                            fontSize: 16,
                            lineHeight: 19.09,
                            color: '#2F2E41'
                        }}>by {payload.organizer}</Text>
                        <View style={styles.listWrapper}>
                            <View style={styles.list}>
                                <View style={styles.icon}><Image source={require('../assets/calendar.png')} /></View>
                                <View>
                                    <Text style={[styles.listTitle, { fontWeight: 500 }]}>{payload.date}</Text>
                                    <Text style={[styles.listSubTitle, { fontWeight: 500 }]}>{payload.time}</Text>
                                </View>
                            </View>
                            <View style={styles.list}>
                                <View style={styles.icon}><Image source={require('../assets/location.png')} /></View>
                                <View>
                                    <Text style={[styles.listTitle, { fontWeight: 500 }]}>{payload.address}</Text>
                                    <Text style={[styles.listSubTitle, { fontWeight: 500 }]}>Join to see full address</Text>
                                </View>
                            </View>
                            <View style={styles.list}>
                                <View style={styles.icon}><Image source={require('../assets/ticket.png')} /></View>
                                <View>
                                    <Text style={[styles.listTitle, { fontWeight: 500 }]}>{payload.remainingTickets}/{payload.totalTickets} tickets left</Text>
                                    <Text style={[styles.listSubTitle, { fontWeight: 500 }]}>{`${payload.totalInvited > 100 ? '100+' : payload.totalInvited}`} invited</Text>
                                </View>
                            </View>
                            <View style={[styles.list, { alignItems: 'center' }]}>
                                <View style={styles.icon}><Image source={require('../assets/money.png')} /></View>
                                <View>
                                    <Text style={[styles.listTitle, { fontWeight: 500 }]}>${(payload.minTicketPrice).toFixed(2)} - ${(payload.maxTicketPrice).toFixed(2)}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{
                                fontWeight: 600,
                                fontSize: 18,
                                lineHeight: 20,
                                color: '#2F2E41'
                            }}>About this event</Text>
                            <Text style={{
                                marginTop: 10,
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 24,
                                color: '#2F2E41'
                            }}>
                                {payload.description}
                            </Text>
                        </View>
                        <View style={{ marginTop: 30, }}>
                            <Text style={{
                                fontWeight: 600,
                                fontSize: 18,
                                lineHeight: 20,
                                color: '#2F2E41'
                            }}>Find this event</Text>

                        </View>
                    </View>
                </View>
            </ActionSheet>
        </View>)
};

const styles = StyleSheet.create({
    listWrapper: {
        marginTop: 20
    },
    list: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 15,
        lineHeight: 20,
    },
    listTitle: {
        color: '#2F2E41',
        fontSize: 16,
        lineHeight: 20,

    },
    listSubTitle: {
        fontSize: 12,
        lineHeight: 20,
        color: '#A5A5A5'
    },
    buttonContainer: {
        shadowRadius: 1,
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowColor: '#000000',
        elevation: 15,
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: '100%',
    },
    buttonWrapper: {
        backgroundColor: 'white',
        padding: 30,
    },
    button: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        backgroundColor: '#6C63FF',
        borderRadius: 50
    },
    buttonText: {
        width: '80%',
        color: 'white',
        textAlign: 'center'
    }
})
export default CustomActionSheet;