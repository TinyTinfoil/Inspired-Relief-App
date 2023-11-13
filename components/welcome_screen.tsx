import { Text, Button, SafeAreaView, Pressable } from 'react-native';
import React, { useState } from 'react';

import styles from '../stylesheet';

const WelcomeScreen = ({ navigation }) =>  {
    return (
        <SafeAreaView style={styles.ViewContainer}>
            <Text style={styles.title}>Welcome to the Inspired Relief App!</Text>
            <Pressable
                style={styles.IRButton}
                onPress={() => navigation.navigate('InfoScreen')}>
                <Text style={styles.IRButtonText}>Get Started</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default WelcomeScreen