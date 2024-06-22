import React, {  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Router from "./app/routers/router";
import store from './app/context/store';
import { Provider } from 'react-redux';


const App = (props) => {
    return(
        <SafeAreaProvider>
            <StatusBar />
            <Provider store={store}>
                <NavigationContainer>
                    <Router />
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>
    );
}


export default App;