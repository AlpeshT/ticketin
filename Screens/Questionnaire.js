import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fetchQuestions, questionListState } from '../atoms';
import CustomCheckbox from '../Components/CustomCheckbox';
import CustomRadio from '../Components/CustomRadio';

const Questionnaire = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const setQuestionList = useSetRecoilState(questionListState);
    const questions = useRecoilValue(fetchQuestions);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [checkedOptions, setCheckedOptions] = useState([]);
    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        const fetchData = () => {
            const data = questions;
            setQuestionList(data);
        };
        fetchData();
    }, [questions, setQuestionList]);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            if (questions[currentQuestionIndex + 1].type === 3) {
                const opts = Object.create([])
                opts[currentQuestionIndex + 1] = [];
                setCheckedOptions(opts);
            }

            /* Disable the button for the next question */
            setButtonDisabled(true);
        } else {
            /* Submit your answers */
            console.log('Questionnaire completed:', answers);
        }
    };

    /* Function to get the value from the textboxes */
    const handleInputChange = (text) => {

        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = text;

        if (text !== '') {
            /* Enable the button */
            setButtonDisabled(false);
        } else {
            /* Enable the button */
            setButtonDisabled(true);
        }
        setAnswers(newAnswers);
    };
    const handleRadioPress = (answer) => {

        /* set Anser */
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answer;
        setAnswers(newAnswers);

        /* Move to next question */
        handleNext();
    };
    const handleCheckboxChange = (label) => {
        let opts = checkedOptions[currentQuestionIndex];
        if (opts.includes(label)) {
            opts = opts.filter((d) => d !== label);
        } else {
            opts.push(label);
        }

        /* Enable the button if any of the options is checked else disable the button */
        (opts.length) ? setButtonDisabled(false) : setButtonDisabled(true)

        /* Store the answers of the current question */
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = opts;
        setAnswers(newAnswers);

        /* Store the checked options of the current question */
        const newOptions = Object.create([])
        newOptions[currentQuestionIndex] = opts;
        setCheckedOptions(newOptions);
    }

    const checkIfCheckboxAreChecked = (label) => {
        return answers[currentQuestionIndex] ? answers[currentQuestionIndex].includes(label) : false;
    }

    return (
        <ImageBackground source={require('../assets/bg1.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.content}>
                        <Text style={[styles.pageNumber, { fontWeight: 600 }]}>
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </Text>
                        <Text style={[styles.question, { fontWeight: 600 }]}>{currentQuestion.question}</Text>
                        {currentQuestion.type === 1 && <TextInput
                            placeholder='Write your answer here'
                            placeholderTextColor="#6C63FF4D"
                            style={styles.input}
                            onChangeText={handleInputChange}
                            value={answers[currentQuestionIndex]}
                            keyboardType={'default'}
                        />}
                        {currentQuestion.type == 2 && <><CustomRadio label={'Yes'} cb={handleRadioPress} /><CustomRadio label={'No'} /></>}
                        {currentQuestion.type == 3 && <View>
                            {currentQuestion.options.map((op) => {
                                return (<CustomCheckbox key={`option_${op}`} label={op} isChecked={checkIfCheckboxAreChecked(op)} onPress={handleCheckboxChange} />)
                            })}
                        </View>}
                    </View>
                    {(currentQuestion.type === 1 || currentQuestion.type === 3 || currentQuestionIndex === (questions.length - 1)) && <TouchableOpacity style={styles.buttonWrapper} onPress={handleNext} disabled={buttonDisabled} >
                        <Text style={styles.button}>{currentQuestionIndex < questions.length - 1 ? "Next question" : "Claim ticket"}</Text>
                    </TouchableOpacity>}
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        width: '100%',
        padding: 16,
        justifyContent: 'center',
    },
    pageNumber: {
        color: '#6C63FF',
        fontSize: 14,
        lineHeight: 17,
        textTransform: 'uppercase'
    },
    question: {
        fontSize: 26,
        lineHeight: 31,
        marginTop: 10,
        marginBottom: 50,
        letterSpacing: -0.30
    },
    input: {
        fontSize: 26
    },
    wrapper: {
        position: 'relative',
        height: '80%',
        padding: 30,
    },
    buttonWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        backgroundColor: '#6C63FF',
        borderRadius: 50
    },
    button: {
        color: 'white',
    },
    content: {
        flex: 1,
    },

});
export default Questionnaire;