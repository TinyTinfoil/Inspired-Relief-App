// Add helper
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const geofire = require('geofire-common'); 

import firebase_config from './firebase_config.json'

let app = firebase.initializeApp(firebase_config.firebase_config);
let db = firebase.firestore(app);

export async function add_helper(name: string, data){
db.collection("helpers").doc(name).set(data)
.then(() => {
    console.log("Helper successfully written!");
})
.catch((error) => {
    console.error("Error pushing helper to DB: ", error);
});
}

const temp_data = {
    contact: "1234567890",
    description: "I can help with anything",
    lat: 1,
    long: 0,
    name: "Test",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    loc: geofire.geohashForLocation([1, 0])
}