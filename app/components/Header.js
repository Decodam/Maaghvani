import React, {  } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../components/Text';


const Header = (props) => {
    return(
        <View style={styles.container} >
            <Text size={18} font="medium">{props.title}</Text>
        </View>
    );
}


export default Header;


const styles =  StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    }
})