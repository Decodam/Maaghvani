import React, {  } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './app/components/Text';


const App = (props) => {
    return(
        <View style={styles.container} >
            <Text size={20} font="bold">App</Text>
        </View>
    );
}


export default App;


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})