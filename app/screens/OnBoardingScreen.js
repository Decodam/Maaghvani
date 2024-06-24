import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Text from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../assets/splash-illustration.png')} style={styles.illustration} />
                <Text size={28} font="bold" style={styles.title}>Welcome to Māghvani!</Text>
                <Text size={13} style={styles.description}>
                    Want to speak like a local? Māghvani connects you with native speakers for a real-life language exchange. Learn and teach, all in one place!
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signInButton} onPress={() => props.navigation.navigate('Login')}>
                        <Text size={16} font="bold" style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerButton} onPress={() => props.navigation.navigate('Register')}>
                        <Text size={16} font="bold" style={styles.registerButtonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    illustration: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    signInButton: {
        backgroundColor: '#000',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '48%',
    },
    signInButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#D9E021',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '48%',
    },
    registerButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});
