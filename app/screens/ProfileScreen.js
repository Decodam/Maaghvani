import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Text from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from 'app/components/Header';
import { AntDesign } from '@expo/vector-icons';
import FriendCard from 'app/components/FriendCard';

const user = {
    name: 'John Doe',
    imageUrl: null, // Provide URL if available
    languages: ['🇺🇸', '🇫🇷'],
    plan: 'Premium',
    validTill: '2024-12-31',

};

const ProfileScreen = (props) => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split('T')[0]; // Get date in 'YYYY-MM-DD' format
    }).reverse(); // Generate dates for the last 30 days

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Profile" />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.profileSection}>
                    <FriendCard name={user.name} source={user.imageUrl} />
                    <Text size={24} style={styles.fullName}>{user.name}</Text>
                    <Text style={styles.languages}>{user.languages.join(' ')}</Text>
                </View>

                <View style={styles.planSection}>
                    <View style={styles.planDetails}>
                        <Text size={18} font="bold" style={styles.planText}>Current Plan: {user.plan}</Text>
                        <Text font="medium" style={styles.planText}>Valid Till: {user.validTill}</Text>
                    </View>
                    <TouchableOpacity style={styles.changePlanButton}>
                        <Text font="medium" size={16} style={styles.changePlanText}>Update Plan</Text>
                        <AntDesign name="arrowright" size={16} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{...styles.planSection, marginTop: 20}}>
                    <TouchableOpacity style={{paddingVertical: 5}}><Text size={16} >Update Profile</Text></TouchableOpacity>
                    <View style={{marginVertical: 5, borderBottomWidth: 1, borderBlockColor: "#ddd" }}/>
                    <TouchableOpacity onPress={() => {props.navigation.navigate("LanguageSelect")}} style={{paddingVertical: 10}}><Text size={16} >Update Languages</Text></TouchableOpacity>                    
                    <View style={{marginVertical: 5, borderBottomWidth: 1, borderBlockColor: "#ddd" }}/>
                    <TouchableOpacity style={{paddingVertical: 5}}><Text style={{color: "red"}} font='medium' size={16} >Logout</Text></TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    fullName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    languages: {
        fontSize: 18,
        color: '#666',
        marginTop: 5,
    },
    planSection: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    planDetails: {
        paddingBottom: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    planText: {
        color: '#333',
    },
    changePlanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    changePlanText: {
        color: '#333',
        marginRight: 5,
    },
});
