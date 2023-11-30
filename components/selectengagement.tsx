import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../stylesheet';

const SelectEngagement = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
    const titles=['Organize group and individual sessions',
                    'Receive individual support and attend sessions',
                    'Other/I\'m not sure'];
    const descs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
                    

    const renderButton = (id: number, title: string, desc: string) => {
        const buttonStyle = (selectedId == id) ? styles.IRButtonPressed : styles.IRButton;
        const isSelected = id === selectedId;
        if (desc) {
            return (
                <TouchableOpacity
                    key={id}
                    onPress={() => {setSelectedId(id); console.log(selectedId);}}
                    style={[buttonStyle, {width:"80%", padding: "5%"}]}>
                    <Text style={[styles.IRButtonText, {paddingBottom: "5%"}]}>{title}</Text>
                    <Text style={[styles.bodyTextLeft, {color: 'white'}]}>{desc}</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    key={id}
                    onPress={() => {setSelectedId(id); console.log(selectedId);}}
                    style={[buttonStyle, {width:"80%", padding: "10%"}]}>
                    <Text style={[styles.IRButtonText, {paddingBottom: "5%"}]}>{title}</Text>
                </TouchableOpacity>
            );
        }
    };

    const renderNextButton = () => {
        if (selectedId) {
            if (selectedId == 1) {
                return (
                    <TouchableOpacity
                        style={styles.IRButton}
                        onPress={() => navigation.navigate('HelperOnboard')}>
                        <Text style={styles.IRButtonText}>Next</Text>
                    </TouchableOpacity>
                );
            } else {
                return (
                    <TouchableOpacity
                        style={styles.IRButton}
                        onPress={() => navigation.navigate('SeekerOnboard')}>
                        <Text style={styles.IRButtonText}>Next</Text>
                    </TouchableOpacity>
                );
            }
        }
    };

    return (
        <SafeAreaView style={styles.ViewContainer}>
            <Text style={styles.leftTitle}>Describe some of the ways you engage with healing?</Text>
            {renderButton(1, titles[0], descs[0])}
            {renderButton(2, titles[1], descs[1])}
            {renderButton(3, titles[2], descs[2])}
            {renderNextButton()}
        </SafeAreaView>
    );
};

export default SelectEngagement;
