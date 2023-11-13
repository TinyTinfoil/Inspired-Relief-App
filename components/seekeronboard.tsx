import { SafeAreaView, TouchableOpacity, Text, ScrollView, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import styles from '../stylesheet';

const SeekerOnboard = ({ navigate }) => {
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    return (
        <SafeAreaView style={styles.ViewContainer}>
            <ScrollView style={{padding: "5%"}}>
                <Text style={styles.titleOnboard}>About you</Text>
                <Text style={styles.bodyTextLeft}>Your information will be used for us to keep in contact with each other. Required fields will be shared with possible matches and visible to others.</Text>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10}}>
                    <View>
                        <Text style={styles.bodyTextLeft}>Profile Picture</Text>
                        <TouchableOpacity 
                            style={{flex: 1, backgroundColor: 'grey' }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 2, paddingHorizontal: 10, justifyContent: 'flex-start'}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder='Preferred Name'
                        placeholderTextColor={'grey'}
                    /> 
                    <TextInput
                        style={styles.input}
                        onChangeText={setPronouns}
                        value={pronouns}
                        placeholder='Prefererd Pronouns'
                        placeholderTextColor={'grey'}
                    />
                    </View>
                </View>
                <View style={{paddingTop: 20}}>
                    <Text style={styles.bodyTextLeft}>Contact Information</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='Email'
                        placeholderTextColor={'grey'}
                    /> 
                    <TextInput
                        style={styles.input}
                        onChangeText={setPhoneNum}
                        value={phoneNum}
                        placeholder='Phone Number'
                        placeholderTextColor={'grey'}
                    /> 
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SeekerOnboard;