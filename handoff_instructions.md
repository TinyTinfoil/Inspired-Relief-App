### navigation
react-navigation being used to navigate between pages. 
### image/video upload
**react native modal** is a library to create pop-up items. an idea for image/file upload is to pull up a pop-up asking whether you want to record or browse files, and based on which button you click can lead you to a system default image picker or file picker
- [take picture and crop](https://www.educative.io/answers/react-native-image-crop-picker)
- [image picker from gallery](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
### saving data in onboarding
can try to save info into sessionstorage to store data before pushing it all to firestore at the end of onboarding
```typescript
import react, { usestate } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

// initialize firebase somewhere in your app
// ...

const useonboardingstate = () => {
  // initialize state with data from local storage if available
  const [onboardingdata, setonboardingdata] = usestate(() => {
    const saveddata = localstorage.getitem('onboardingdata');
    return saveddata ? json.parse(saveddata) : {};
  });

  // function to update local state and save to local storage
  const updatedata = (newdata) => {
    const updateddata = { ...onboardingdata, ...newdata };
    setonboardingdata(updateddata);
    localstorage.setitem('onboardingdata', json.stringify(updateddata));
  };

  return [onboardingdata, updatedata];
};

const onboardingcomponent = () => {
  const [onboardingdata, updateonboardingdata] = useonboardingstate();

  const handlefinalsubmit = async () => {
    // retrieve data from local storage
    const finaldata = localstorage.getitem('onboardingdata');
    if (finaldata) {
      try {
        // push to firestore
        await firebase.firestore().collection('onboardingdata').add(json.parse(finaldata));
        console.log('onboarding data successfully saved to firestore');
        
        // clear local storage after successful submission
        localstorage.removeitem('onboardingdata');
      } catch (error) {
        console.error('error saving to firestore', error);
      }
    }
  };
```

### good libraries
for any swiper things, `react-native-swiper` is really easy to use. in the info.tsx file, there's a demo for how to use it (i used the library for the first couple of screens for introduction to the app).

we use expo-video-player for cross platform video playback