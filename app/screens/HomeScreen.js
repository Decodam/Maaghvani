import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Text from '../components/Text';
import FriendCard from '../components/FriendCard';
import Avatar from '../components/Avatar';
import { SafeAreaView } from 'react-native-safe-area-context';
import languages from '../data/languages.json';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
};

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const user = {
    fullName: 'Bernice Johnson',
    avatarUrl: 'https://example.com/user-avatar.jpg' // Replace with the actual URL of the user avatar
};

// Pick 4 random languages from the languages.json file
const getRandomLanguages = () => {
    const shuffled = languages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
};

const HomeScreen = (props) => {
    const navigation = useNavigation();
    const userLanguages = getRandomLanguages();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                {/* Greetings */}
                <View style={styles.greetingsContainer}>
                    <View>
                        <Text size={24} style={styles.greetingText}>{getGreeting()},</Text>
                        <Text size={32} style={styles.userNameText}>{getFirstName(user.fullName)}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Avatar
                            name={user.fullName}
                            size={50}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.languagesContainer}>
                    <View style={{marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                        <Text size={16} font="bold">You Languages</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languagesList}>
                        {languages.slice(9, 12).map(language => (
                            <View key={language.code} style={styles.languageCard}>
                                <View style={styles.languageImageBorder}><Image style={styles.languageImage} source={{ uri: `https://flagcdn.com/w160/${language.flagCode}.png` }} /></View>
                                <Text font="medium" style={styles.languageText}>{language.name.replace(/\([^()]*\)/g, '')}</Text>
                            </View>
                        ))}

                        <TouchableOpacity onPress={() => {props.navigation.navigate("LanguageSelect")}} style={styles.languageCard}>
                            <View style={styles.languageImageBorder}><View style={{width: 60, height: 60, borderRadius: 30, justifyContent: "center", alignItems: "center"}}>
                                <AntDesign name="plus" size={30} color={"#000"} />
                            </View></View>
                            <Text font="medium" style={styles.languageText}>Add New</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>


                <View style={styles.languagesContainer}>
                    <View style={{marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                        <Text size={16} font="bold">Explore Languages</Text>
                        <TouchableOpacity><Text size={12} style={{color: "#666"}} font="medium">See All</Text></TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languagesList}>
                        {userLanguages.map(language => (
                            <View key={language.code} style={styles.languageCard}>
                                <View style={styles.languageImageBorder}><Image style={styles.languageImage} source={{ uri: `https://flagcdn.com/w160/${language.flagCode}.png` }} /></View>
                                <Text font="medium" style={styles.languageText}>{language.name.replace(/\([^()]*\)/g, '')}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>


                <View style={styles.languagesContainer}>
                    <View style={{marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                        <Text size={16} font="bold">Your Friends</Text>
                        <TouchableOpacity><Text size={12} style={{color: "#666"}} font="medium">Search</Text></TouchableOpacity>
                    </View>
                    
                    <View style={styles.flexwrapper}>
                        <FriendCard ShowText name={"Agnik Mitra"} />
                        <FriendCard ShowText name={"Jenson Button"} />
                        <FriendCard ShowText name={"Sudipa Chatterjee"} />
                        <FriendCard ShowText name={"Rika Raha"} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    greetingsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: 50,
        marginBottom: 15
    },
    greetingText: {
        fontWeight: 'bold',
    },
    userNameText: {
        fontWeight: "bold"
    },
    languagesContainer: {
        paddingVertical: 10,
    },
    languagesList: {
        marginHorizontal: 16,
    },
    languageCard: {
        alignItems: 'center',
        marginRight: 20,
        marginBottom: 10,
    },
    languageText: {
        marginTop: 5,
    },
    languageImage: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 30,
        margin: 3
    },
    languageImageBorder: {
        borderColor: "#000",
        borderWidth: 3,        
        borderRadius: 40,
    },
    flexwrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 15,
        justifyContent: "space-between"
    }
});
