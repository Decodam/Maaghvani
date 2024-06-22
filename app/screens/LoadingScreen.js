import React, {  } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Text from '../components/Text';


const LoadingScreen = (props) => {
    return(
        <View style={styles.container} >
            <ActivityIndicator size={36} color={"#000"} />
        </View>
    );
}


export default LoadingScreen;


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})