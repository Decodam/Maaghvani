import React, {  } from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import Text from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container} >
            <ScrollView style={{flex: 1}}>
                <Text>HomeScreen</Text>

                <Button onPress={() => navigation.navigate('Login')} title='Login' />
            </ScrollView>
        </SafeAreaView>
    );
}


export default HomeScreen;


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})