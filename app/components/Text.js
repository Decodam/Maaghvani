import React, {  } from 'react';
import {Text} from 'react-native';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';



const TextComponent = (props) => {

    let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });
    
    let size = 14;



    if (!fontsLoaded) {
        return (
            <Text
                style={{
                    ...props.style,
                    fontSize: props.size ? props.size : size,
                }}
            >
                {props.children} font not loaded
            </Text>
        );
    } else {
        return (
            <Text
                style={{
                    ...props.style,
                    fontSize: props.size ? props.size : size,
                    fontFamily: props.font === "light" ? 'Poppins_300Light' : props.font === "medium" ? 'Poppins_500Medium' : props.font === "bold" ? 'Poppins_700Bold' : 'Poppins_400Regular',
                }}
            >
                {props.children}
            </Text>
        );
    }
}


export default TextComponent;

