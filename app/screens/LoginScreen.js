import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Text from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';

const LoginScreen = (props) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [Error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Image source={require('../../assets/icon.png')} style={styles.logo} />
                <Text size={24} style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Sign in to continue learning and connecting with native speakers.</Text>
                
                {Error && <Text size={12} style={styles.error}>{Error}.</Text>}

                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={20} color="grey" />
                    <TextInput
                        inputMode='email'
                        style={styles.input}
                        placeholder="Email address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="lock" size={20} color="grey" />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <MaterialIcons name={passwordVisible ? "visibility" : "visibility-off"} size={20} color="grey" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.signInButton}>
                    <Text size={18} style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.orContainer}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.socialContainer}>
                    <FontAwesome.Button name="google" backgroundColor="#4285F4" onPress={() => { }}>
                        Google
                    </FontAwesome.Button>
                    <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={() => { }}>
                        Facebook
                    </FontAwesome.Button>
                    <FontAwesome.Button name="apple" backgroundColor="#000000" onPress={() => { }}>
                        Apple
                    </FontAwesome.Button>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Don’t have an account? <Text style={styles.boldText}>Register</Text></Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        marginHorizontal: 15
    },
    backButton: {
        position: "absolute",
        top: 30,
        left: 10,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
        fontWeight: "bold"
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 12,
        width: '95%',
        marginBottom: 20,
    },
    input: {
        marginLeft: 10,
        flex: 1,
    },
    signInButton: {
        backgroundColor: '#D9E021',
        borderRadius: 16,
        paddingVertical: 18,
        paddingHorizontal: 40,
        alignItems: 'center',
        width: '95%',
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        marginBottom: 20,
    },
    orText: {
        fontSize: 16,
        color: '#000',
        marginHorizontal: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%',
        marginBottom: 20,
    },
    registerText: {
        fontSize: 16,
        color: '#000',
    },
    boldText: {
        fontWeight: 'bold',
    },
});
