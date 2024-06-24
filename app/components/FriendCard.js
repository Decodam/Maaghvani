import React, {  } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import Avatar from './Avatar';

const FriendCard = (props) => {
    return(
        <View style={styles.container} >
            <View style={{borderRadius: 50, borderWidth: 3, borderColor: "#000", padding: 3}}><Avatar name={props.name} imageUrl={props.source} size={80} /></View>
            {props.ShowText === true && <Text font="medium" style={{marginTop: 10, textAlign: "center", width: 100}}>{props.name}</Text>}
        </View>
    );
}


export default FriendCard;


const styles =  StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 5
    }
})