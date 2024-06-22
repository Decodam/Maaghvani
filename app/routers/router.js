import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen"
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { useSelector, useDispatch } from 'react-redux'
import { LoginUser, LogoutUser } from 'app/context/userSlice';

const Router = (props) => {
    const Stack = createNativeStackNavigator();
    const user = useSelector(state => state.user.data);
    const session = useSelector(state => state.user.session);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LogoutUser())
    }, [])

    if (session === null) {
        return <LoadingScreen />;
    }

    return(
        <Stack.Navigator>
            {session ? (
                <>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                </>
            )}
        </Stack.Navigator>
    );
}


export default Router;