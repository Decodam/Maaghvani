import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Text from "../components/Text"
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from 'app/screens/LoadingScreen';
import ProfileScreen from 'app/screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TranslateScreen from '../screens/TranslateScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LanguageSelectScreen from 'app/screens/LanguageSelectScreen';
import { useSelector, useDispatch } from 'react-redux';
import { LoginUser, LogoutUser } from 'app/context/userSlice';

const Router = (props) => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const user = useSelector(state => state.user.data);
    const session = useSelector(state => state.user.session);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoginUser());
    }, []);

    if (session === null) {
        return <LoadingScreen />;
    }

    const CustomTabBarIcon = ({ route, focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = 'home';
        } else if (route.name === 'Friends') {
            iconName = 'smileo';
        } else if (route.name === 'Profile') {
            iconName = 'user';
        } else if (route.name === 'Translate') {
            iconName = 'translate'; 
        }

        return (
            <View
                style={{
                    paddingHorizontal: 10,
                    width: focused ? "auto" : 60,
                    height: 40,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: focused ? "#D9E021" : '#f4f4f4', 
                    borderRadius: 16,
                }}
            >
                {iconName === 'translate' ? (
                    <MaterialCommunityIcons name={iconName} size={focused ? 26 : size} color={focused ? '#000' : color} />
                ) : (
                    <AntDesign name={iconName} size={focused ? 26 : size} color={focused ? '#000' : color} />
                )} 

                {focused && <Text font="medium" style={{padding: 5}}>{route.name}</Text>}
            </View>
        );
    };

    const MainTabNavigator = () => (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomTabBarIcon
                        route={route}
                        focused={focused}
                        color={color}
                        size={22}
                    />
                ),
                tabBarShowLabel: false, // Hide tab bar labels
                tabBarActiveTintColor: '#000', // Icon color for active tab
                tabBarInactiveTintColor: '#666', // Icon color for inactive tab
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                    shadowOpacity: 0,
                    elevation: 0,
                },
            })}
            initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Translate" component={TranslateScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );

    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            {session ? (
                <>
                    <Stack.Screen name="Main" component={MainTabNavigator} />
                    <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} />
                </>
            ) : (
                <>
                    <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </>
            )}
        </Stack.Navigator>
    );
}

export default Router;
