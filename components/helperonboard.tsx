import { SafeAreaView, TouchableOpacity, Text, ScrollView, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { RadioButton } from 'react-native-paper';
import styles from '../stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon component
import CustomRadioButton from './radioButton';

const HelperOnboard = ({ navigate }) => {
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const [ig, setIg] = useState('');
    const [fb, setFb] = useState('');
    const [twitter, setTwitter] = useState(''); // I was not going to call this variable setX.
    const [whatsApp, setWhatsApp] = useState(''); 
    const [checkedEmail, setCheckedEmail] = useState('no');
    const [checkedPhone, setCheckedPhone] = useState('no');
    const [checkedSession, setCheckedSession] = useState('unchecked');
    const [guidingPhilosophy, setGuidingPhilosophy] = useState('');
    return (
        <SafeAreaView style={styles.ViewContainer}>
            <ScrollView automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.topContainer}>
                <Text style={styles.titleOnboard}>About you</Text>
                <Text style={styles.bodyTextLeft}>Your information will be used for us to keep in contact with each other. Required fields will be shared with possible matches and visible to others.</Text>
                </View>
                <View style={{paddingHorizontal: '5%'}}>
                <View style={{flexDirection: 'row', alignContent: 'center', paddingTop: 10}}>
                    <View style={{flex: 0.4}}>
                        <TouchableOpacity 
                            style={{flex: 1, backgroundColor: 'grey' }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: .6, paddingHorizontal: 10, justifyContent: 'flex-start'}}>
                        <Text style={[styles.bodyTextLeft, {fontSize: 14}]}>Preferred Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholderTextColor={'grey'}
                        /> 
                        <Text style={[styles.bodyTextLeft, {fontSize: 14}]}>Pronouns</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPronouns}
                            value={pronouns}
                            placeholderTextColor={'grey'}
                        />
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 20}}>
                    <Text style={[styles.bodyTextLeft, {fontSize: 14, flex: 0.2}]}>Website</Text>
                    <TextInput
                        style={[styles.input, {flex: .8, justifyContent: 'flex-end'}]}
                        onChangeText={setWebsite}
                        value={website}
                        placeholderTextColor={'grey'}
                    /> 
                </View>
                <Text style={[styles.bodyTextLeft, {marginTop: 20, fontSize: 14}]}>Social Media Handles</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                    <Text style={[styles.bodyTextLeft, {fontSize: 10, flex: 0.1}]}>IG</Text>
                    <TextInput
                        style={[styles.input, {flex: .4, justifyContent: 'center'}]}
                        onChangeText={setIg}
                        value={ig}
                        placeholderTextColor={'grey'}
                    />
                    <Text style={[styles.bodyTextLeft, {fontSize: 10, flex: 0.1}]}>X</Text>
                    <TextInput
                        style={[styles.input, {flex: .4, justifyContent: 'flex-start'}]}
                        onChangeText={setTwitter}
                        value={twitter}
                        placeholderTextColor={'grey'}
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                    <Text style={[styles.bodyTextLeft, {fontSize: 10, flex: 0.1, justifyContent: 'flex-end'}]}>FB</Text>
                    <TextInput
                        style={[styles.input, {flex: .4, justifyContent: 'center'}]}
                        onChangeText={setFb}
                        value={fb}
                        placeholderTextColor={'grey'}
                    />
                    <Text style={[styles.bodyTextLeft, {fontSize: 10, flex: 0.1, justifyContent: 'flex-end'}]}>WA</Text>
                    <TextInput
                        style={[styles.input, {flex: .4, justifyContent: 'flex-start'}]}
                        onChangeText={setWhatsApp}
                        value={whatsApp}
                        placeholderTextColor={'grey'}
                    />
                </View>
                <View style={{paddingTop: 10}}>
                    <Text style={[styles.bodyTextLeft, {marginTop: 15, fontWeight: 'bold'}]}>Contact Information</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                        <Text style={[styles.bodyTextLeft, {fontSize: 14, flex: 0.35}]}>Email</Text>
                        <View style={{flex: .65, justifyContent: 'flex-end'}}>
                            <TextInput
                                style={[styles.input, {flex: .65, justifyContent: 'flex-end'}]}
                                onChangeText={setEmail}
                                value={email}
                                placeholderTextColor={'grey'}
                            /> 
                        </View>
                    </View>
                    <View style={{marginLeft: "35%"}}>
                        <Text style={[styles.bodyTextLeft, {fontSize:14, marginTop:5}]}>Preferred method of contact?</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CustomRadioButton
                                selected={checkedEmail === 'yes' ? 'checked' : 'unchecked'}
                                onPress={() => setCheckedEmail('yes')}
                                color='#536A3E'
                            />
                            <Text style={{color: "#536A3E", fontWeight: 'bold'}}>Yes</Text>
                            <CustomRadioButton
                                selected={ checkedEmail === 'no' ? 'checked' : 'unchecked' }
                                onPress={() => setCheckedEmail('no')}
                                color='#536A3E'
                            />
                            <Text style={{color: "#536A3E", fontWeight: 'bold'}}>No</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                        <Text style={[styles.bodyTextLeft, {fontSize: 14, flex: 0.35}]}>Business Phone</Text>
                        <View style={{flex: .65, justifyContent: 'flex-end'}}>
                            <TextInput
                                style={[styles.input, {flex: .65, justifyContent: 'flex-end'}]}
                                onChangeText={setPhoneNum}
                                value={phoneNum}
                                placeholderTextColor={'grey'}
                            /> 
                        </View>
                    </View>
                    <View style={{marginLeft: "35%"}}>
                        <Text style={[styles.bodyTextLeft, {fontSize:14, marginTop: 5}]}>Preferred method of contact?</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CustomRadioButton
                                selected={checkedPhone === 'yes' ? 'checked' : 'unchecked'}
                                onPress={() => setCheckedPhone('yes')}
                                color='#536A3E'
                            />
                            <Text style={{color: "#536A3E", fontWeight: 'bold'}}>Yes</Text>
                            <CustomRadioButton
                                selected={ checkedPhone === 'no' ? 'checked' : 'unchecked' }
                                onPress={() => setCheckedPhone('no')}
                                color='#536A3E'
                            />
                            <Text style={{color: "#536A3E", fontWeight: 'bold'}}>No</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 20}}>
                    <Text style={[styles.bodyTextLeft, {fontSize: 14, flex: 0.5}]}>Location (City and State)</Text>
                    <TextInput
                        style={[styles.input, {flex: .5, justifyContent: 'flex-end'}]}
                        onChangeText={setLocation}
                        value={location}
                        placeholderTextColor={'grey'}
                    /> 
                </View>
                <Text style={[styles.bodyTextLeft, {fontSize:14, marginTop: 5}]}>Do you offer remote sessions?</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CustomRadioButton
                        selected={checkedSession === 'yes' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedSession('yes')}
                        color='#536A3E'
                    />
                    <Text style={{color: "#536A3E", fontWeight: 'bold'}}>Yes</Text>
                    <CustomRadioButton
                        selected={ checkedSession === 'no' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedSession('no')}
                        color='#536A3E'
                    />
                    <Text style={{color: "#536A3E", fontWeight: 'bold'}}>No</Text>
                </View>
                <Text style={[styles.bodyTextLeft, {marginTop: 15, fontWeight: 'bold', marginBottom: 10}]}>My Guiding Philosophy</Text>
                <TextInput
                    style={{backgroundColor: '#fff',borderColor:'#D3D3D3', borderRadius: 5, padding: 10, height: 100, marginBottom: 10}}
                    editable
                    multiline
                    numberOfLines={4}
                    onChangeText={setGuidingPhilosophy}
                    value={guidingPhilosophy}
                    placeholderTextColor={'grey'}
                /> 
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.IRButton}
                    onPress={() => {} }> 
                        <Text style={styles.IRButtonText}>Next</Text>
                    </TouchableOpacity>
                    <Text style={[styles.bodyText, {fontSize: 12}]}>1/3 Steps</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
    //navigation.navigate('seekeronboardp2'); for onpress
}

export default HelperOnboard;