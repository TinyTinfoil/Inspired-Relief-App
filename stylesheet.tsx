import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ViewContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: "5%"
    },
    IRButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginVertical: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#D9D9D9',
        width: "37.5%",
    },
    title: {
        fontSize: 30,
        paddingBottom: "10%",
        paddingHorizontal: "10%",
        textAlign: 'center'
    },
    titleOnboard: {
        fontSize: 30,
        paddingBottom: 10,
        textAlign: 'left'
    },
    leftTitle: {
        fontSize: 30,
        paddingBottom: "10%",
        textAlign: 'left',
        paddingHorizontal: "10%"
    },
    bodyText: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
    },
    bodyTextLeft: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
    },
    IRButtonText: {
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        letterSpacing: 0.25,
        color: 'black',
      },
    swiperContainer: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        height: 40,
        backgroundColor: '#D9D9D9',
        marginTop: 20,
        paddingHorizontal: 10, 
      },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: "10%",
        // other styling like padding, margin, shadow, etc.
    },
    ButtonWrapperSwiper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    IRButtonPressed: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginVertical: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'grey',
    },        
})


export default styles;
