import React, {  } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Text from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = (props) => {
    return(
        <SafeAreaView style={styles.container} >
            <ScrollView style={{flex: 1}}>
                <Text>LoginScreen</Text>
            </ScrollView>
        </SafeAreaView>
    );
}


export default LoginScreen;


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})