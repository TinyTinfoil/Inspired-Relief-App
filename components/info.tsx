import { Text, Button, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import styles from '../stylesheet';
import Card from './card';
import Swiper from 'react-native-swiper';

const CustomButton = ({ title }) => (
    <TouchableOpacity style={styles.IRButton}>
        <Text style={styles.IRButtonText}>{title}</Text>
    </TouchableOpacity>
);

const InfoScreen = ({ navigation }) =>  {
    const [next, setNext] = useState('Next');
    const swiper = useRef(null)
    let pageNo = 0;
    return (
        <SafeAreaView style={styles.swiperContainer}>
            <Swiper
            ref={swiper}
            showsPagination={true}
            loop={false}
            activeDotColor='#000'
            onIndexChanged={(index) => {pageNo = index;
                console.log(pageNo);
                if (pageNo > 1) {
                    setNext('Get Started');
                } else if (pageNo <= 1) {
                    setNext('Next');
                }
            }}>
                <Card>
                    <Text style={styles.title}>
                        Welcome to Inspired Relief!
                    </Text>
                    <Text style={styles.bodyText}>
                    We’re glad you’re here and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </Card>
                <Card>
                    <Text style={styles.title}>
                       Match with a helper 
                    </Text>
                    <Text style={styles.bodyText}>
                    We’re glad you’re here and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </Card>
                <Card>
                    <Text style={styles.title}>
                       Build Communities 
                    </Text>
                    <Text style={styles.bodyText}>
                    We’re glad you’re here and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </Card>
            </Swiper>
            <TouchableOpacity style={styles.IRButton}
            onPress={() => {swiper.current.scrollBy(1);
                pageNo++;
                console.log(pageNo);
                if (pageNo <= 1) {
                    setNext('Next');
                }
                if (pageNo > 1) {
                    setNext('Get Started');
                }
                if (next == 'Get Started') {
                    navigation.navigate('SelectEngagement');
                }
            }}>
                <Text style={styles.IRButtonText}>{next}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default InfoScreen;