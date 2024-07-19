import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CustomRadio = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handlePress = () => {
        /* set status to checked/unchacked */
        setIsChecked(!isChecked);

        /* set Anser */
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = label;
        setAnswers(newAnswers);

        /* Move to next question */
        handleNext();
    };
    return (<TouchableOpacity style={styles.checkbox} onPress={handlePress}><Text style={[styles.label, { fontWeight: 600 }]}>{label}</Text>{isChecked && <Image source={require('../assets/Round.png')} style={styles.check} />}</TouchableOpacity>);
};
const styles = StyleSheet.create({
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF59',
        borderRadius: 8,
        marginBottom: 15
    },
    check: {
        position: 'absolute',
        right: 30,
    },
    label: {
        marginRight: 10,
        color: '#8D86FE',
        fontSize: 20,
        lineHeight: 24,
    },
})
export default CustomRadio;