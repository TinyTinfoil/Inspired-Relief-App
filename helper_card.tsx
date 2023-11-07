import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
// import VideoPlayer  from 'expo-video-player'
import WebView from 'react-native-webview';
export function HelperCard({name, description, video, contact}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <VideoPlayer
          videoProps={{
          source:{ uri: video }//,
          //resizeMode: ResizeMode.CONTAIN,
          //shouldPlay: true,
          // style: {margin: 'auto'}
        }}
          
          // style={{ width: Dimensions.get('window').width - 40 , height: 200, videoBackgroundColor: 'transparent',
          // controlsBackgroundColor: 'red',}}
        />
        {/* <Video 
        source={{uri: video}}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        useNativeControls={true}
        // style={{margin: 'auto'}}
        /> */}
        
        <Text style={styles.paragraph}>{description}</Text>
        <View style={{position:'relative'}}>
            {/*@ts-ignore*/}
            <Image style={styles.logo}
                    source={require('./assets/favicon.png')}/>
            <Text>{contact}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'left',
        //@ts-ignore
        textIndent: '2em',
        width: '100%'
    },
    logo: {
        //@ts-ignore
        height: '2em',
        //@ts-ignore
        width: '2em',
        margin: 5,
        float: 'left'
    }
});

function VideoPlayer(props: { videoProps: { source: { uri: string; }; }; } ) {
  return (
    <WebView
      style={{ width: Dimensions.get('window').width - 40 , height: 200}}
      javaScriptEnabled={true}
      domStorageEnabled={false}
      source={{ html: `<iframe width="640" height="360" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` }}
    />
  );
}