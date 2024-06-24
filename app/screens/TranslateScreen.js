import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech';

import Text from '../components/Text';
import Header from 'app/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons'; // Import Ant Design icons
import languages from '../data/languages.json';
import Translator from 'react-native-translator';

const TranslateScreen = (props) => {
    // Initialize state with default languages (English to Spanish)
    const [selectedLanguage, setSelectedLanguage] = useState(languages.find(lang => lang.code === 'en-US'));
    const [outputLanguage, setOutputLanguage] = useState(languages.find(lang => lang.code === 'es'));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const handleLanguageChange = (value) => {
        const language = languages.find(lang => lang.code === value);
        setSelectedLanguage(language);
    };

    const handleLanguageOutputChange = (value) => {
        const language = languages.find(lang => lang.code === value);
        setOutputLanguage(language);
    };

    const handleInputCopy = () => {
        Clipboard.setString(value);
    };
    
    const handleOutputCopy = () => {
        Clipboard.setString(result);
    };
    
    const handleSwap = () => {
        const temp = selectedLanguage;
        setSelectedLanguage(outputLanguage);
        setOutputLanguage(temp);
        
        setValue('');
        setResult('');
    };
    
    const speakTranslatedText = () => {
        Speech.speak(result, { language: outputLanguage.code });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Translate" />
            <View style={styles.content}>
                <View style={styles.translationInput}>
                    <RNPickerSelect
                        onValueChange={handleLanguageChange}
                        items={languages.map(language => ({
                            label: `${language.flag} ${language.name}`,
                            value: language.code
                        }))}
                        placeholder={{ label: 'Select Input language...', value: null }}
                        value={selectedLanguage.code} // Set default value
                    />
                    <>
                        <View style={{borderBottomColor: "#ddd", borderBottomWidth: 1, marginBottom: 10}} />
                        <TextInput 
                            value={value} 
                            onChangeText={setValue} 
                            multiline 
                            placeholder='Enter Text To Translate....' 
                            style={{ flex: 1, fontSize: 22 }} // Increased font size to 22
                        />
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={handleInputCopy}>
                                <AntDesign name="copy1" size={22} color="grey" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSwap} style={{ marginLeft: 15 }}>
                                <AntDesign name="swap" size={22} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </>
                </View>
                <View style={{display: "none"}}>
                    <Translator
                        from={selectedLanguage.code.split('-')[0]}
                        to={outputLanguage.code.split('-')[0]}
                        value={value}
                        onTranslated={(t) => setResult(t)}
                    />
                </View>
                <View style={{marginTop: 20, ...styles.translationInput}}>
                    <RNPickerSelect
                        onValueChange={handleLanguageOutputChange}
                        items={languages.map(language => ({
                            label: `${language.flag} ${language.name}`,
                            value: language.code
                        }))}
                        placeholder={{ label: 'Select Output language...', value: null }}
                        value={outputLanguage.code} // Set default value
                    />
                    <>
                        <View style={{borderBottomColor: "#ddd", borderBottomWidth: 1, marginBottom: 10}} />
                        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                            <Text size={22} style={{ color: result ? "#333" : "grey" }}>{result && result !== "Enter a URL" && result.trim().length > 1? result  : 'Translated Text Will Appear Here....'}</Text>
                        </ScrollView>
                        <View style={styles.iconContainer}>
                            {result && result.trim().length && result !== "Enter a URL" > 1 ? (
                                <TouchableOpacity onPress={speakTranslatedText} style={{ marginRight: 15 }}>
                                    <AntDesign name="sound" size={22} color="grey" />
                                </TouchableOpacity>
                            ) : (
                                <></>
                            )}
                            
                            <TouchableOpacity onPress={handleOutputCopy} style={{ marginRight: 14 }}>
                                <AntDesign name="copy1" size={22} color="grey" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSwap} >
                                <AntDesign name="swap" size={22} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TranslateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    translationInput: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderWidth: 1,
        flex: 1
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
    }
});
