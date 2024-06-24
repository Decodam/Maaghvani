import React, {  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Router from "./app/routers/router";
import store from './app/context/store';
import { Provider } from 'react-redux';
import {TranslatorProvider} from 'react-native-translator' // here


const App = (props) => {
    return(
        <SafeAreaProvider>
            <StatusBar />
            <Provider store={store}>
                <TranslatorProvider>
                    <NavigationContainer>
                        <Router />
                    </NavigationContainer>
                </TranslatorProvider>
            </Provider>
        </SafeAreaProvider>
    );
}


export default App;