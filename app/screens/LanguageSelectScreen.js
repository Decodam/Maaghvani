import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Text from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import languagesData from '../data/languages.json'; // Adjust the path as needed

const LanguageSelectScreen = (props) => {
    const [search, setSearch] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        setLanguages(languagesData);
    }, []);

    const toggleLanguageSelection = (language) => {
        setSelectedLanguages(prevSelected =>
            prevSelected.includes(language)
                ? prevSelected.filter(item => item !== language)
                : [...prevSelected, language]
        );
    };

    const filteredLanguages = languages.filter(language =>
        language.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text size={28} style={styles.title}>Which of the following Languages do you speak?</Text>

                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 10}}>
                    <View style={styles.inputContainer}>
                        <MaterialIcons name="search" size={20} color="grey" />
                        <TextInput
                            style={styles.input}
                            placeholder="Search..."
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>
                    {selectedLanguages.length > 0 && (
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}} style={{width: 50, height: 50, marginLeft: 8, justifyContent: "center", alignItems: "center", backgroundColor: "#D9E021", borderRadius: 16}}>
                            <AntDesign name="arrowright" size={20} color="#000" />
                        </TouchableOpacity>
                    )}
                </View>
                <ScrollView horizontal style={styles.selectedLanguagesContainer}>
                    {selectedLanguages.map(language => (
                        <TouchableOpacity
                            key={language}
                            style={styles.selectedLanguage}
                            onPress={() => toggleLanguageSelection(language)}
                        >
                            <Text style={styles.selectedLanguageText}>
                                {languages.find(lang => lang.code === language)?.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContent}>
                {filteredLanguages.map(language => (
                    <TouchableOpacity
                        key={language.id}
                        style={styles.languageContainer}
                        onPress={() => toggleLanguageSelection(language.code)}
                    >
                        <View style={styles.languageInfo}>
                            <Text style={styles.languageName}>
                                {language.flag} {language.name}
                            </Text>
                        </View>
                        <MaterialIcons
                            name={selectedLanguages.includes(language.code) ? 'radio-button-checked' : 'radio-button-unchecked'}
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default LanguageSelectScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        marginHorizontal: 15,
        marginVertical: 5
    },  
    scrollContent: {
        padding: 15
    },
    backButton: {
        alignSelf: 'flex-start',
        marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 12,
        height: 50
    },
    input: {
        marginLeft: 10,
        flex: 1,
    },
    languageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginVertical: 5,
    },
    languageInfo: {
        flexDirection: 'column',
    },
    selectedLanguagesContainer: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    selectedLanguage: {
        backgroundColor: '#D9E021',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        marginRight: 10,
    },
    selectedLanguageText: {
        color: '#000',
    }
});
