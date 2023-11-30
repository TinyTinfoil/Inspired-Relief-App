import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ViewContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF9F4',
        justifyContent: 'center',
        padding: "5%"
    },
    IRButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#536A3E',
        width: "37.5%",
    },
    title: {
        fontSize: 30,
        paddingBottom: "10%",
        paddingHorizontal: "10%",
        textAlign: 'center',
        fontFamily: 'Montserrat_500Medium'
    },
    titleOnboard: {
        fontSize: 30,
        paddingBottom: 10,
        textAlign: 'left',
        fontFamily: 'Montserrat_500Medium'
    },
    leftTitle: {
        fontSize: 30,
        paddingBottom: "10%",
        textAlign: 'left',
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_500Medium'
    },
    bodyText: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        fontFamily: 'Montserrat_500Medium'
    },
    bodyTextLeft: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        fontFamily: 'Montserrat_500Medium'
    },
    IRButtonText: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Montserrat_600SemiBold'
      },
    swiperContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF9F4',
    },
    input: {
        height: 30,
        backgroundColor: '#fff',
        marginBottom: 5,
        marginTop: 5,
        paddingHorizontal: 10, 
        borderRadius: 5,
        borderColor: '#D3D3D3',
        borderWidth: .2,
        shadowOffset: {
            width: .1,
            height: .1,
          },
        shadowOpacity: .1,
        shadowRadius: 1,
      },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: "10%",
        backgroundColor: '#FFF9F4',
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
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#324026',
    },        
    bottomContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFF9F4',
        shadowOffset: {
            width: .1,
            height: -1,
          },
        shadowOpacity: .1,
        shadowRadius: 3,
    },
    topContainer: {
        width: '100%',
        backgroundColor: '#FFF9F4',
        paddingHorizontal: "5%",
        paddingVertical: "2.5%",
        shadowOffset: {
            width: 1,
            height: 1,
          },
        shadowOpacity: .1,
        elevation: 3,
        shadowRadius: 3,
    }
})


export default styles;
