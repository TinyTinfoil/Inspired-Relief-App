import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
//https://snack.expo.dev/4BqWHJY5G
const info = [{uri:'https://reactnative.dev/img/tiny_logo.png',text:"hello1"}, {uri:'https://reactnative.dev/img/tiny_logo.png',text:"hello2"}, {uri:'https://reactnative.dev/img/tiny_logo.png',text:"hello3"}];

const InfoCards = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      autoplayLoopKeepAnimation
      showPagination
      data={info}
      renderItem={({ item }) => (
        <View style={styles.child}>
          <Image
        style={styles.pictures}
        source={{
          uri: item.uri,
        }}
      />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
    />
  </View>
);
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'darkgrey' },
  child: {justifyContent: 'center', width:width,paddingTop:100},
  text: { fontSize:12, textAlign: 'center',paddingTop:"5em" },
  pictures: {
    width: 100,
    height: 100,
    margin: 'auto',
  },
});

export default InfoCards;