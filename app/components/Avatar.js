import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const Avatar = ({ name, imageUrl, backgroundColor, size }) => {
    const getInitials = (name) => {
        const nameParts = name.split(' ');
        return nameParts.length >= 2 ? `${nameParts[0][0]}${nameParts[1][0]}` : name[0];
    };

    return (
        <View style={[styles.avatar, { backgroundColor: backgroundColor || '#D9E021', width: size || 50, height: size || 50, borderRadius: size ? size/2 : 25 }]}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
                <Text size={size*0.35 || 17} style={styles.initials}>{getInitials(name)}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    initials: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default Avatar;