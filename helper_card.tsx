import { Text, Card, Button, Icon } from '@rneui/themed';
import { FlatList, StyleSheet, View, Image, Dimensions } from 'react-native';

export function _renderItem({item}) {
  return (
     <View style={{
      borderRadius: 5,
      height: 250,
      padding: 50,
      marginLeft: 25,
      marginRight: 25, }}>
        <Text style={{fontSize: 30}}>{}</Text>
        <Text style={styles.title}>{item.name}</Text>
        {/*
        <Video
          videoProps={{
            source:{ uri: item.video },
            resizeMode: ResizeMode.CONTAIN,
            shouldPlay: true,
            isLooping: true,
          // style: {margin: 'auto'}
          }}
          style={{ 
            width: Dimensions.get('window').width - 80, 
            height: 200, videoBackgroundColor: 'transparent',
            controlsBackgroundColor: 'black',
          }}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
        */}
        <Text style={styles.paragraph}>{item.description}</Text>
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
