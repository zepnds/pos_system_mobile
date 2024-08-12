import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function useStyles() {
  return StyleSheet.create({
    title: { fontSize: 30, fontWeight: '700', textAlign: 'center' },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e8edec',
    },
    content: {
      width: wp(50),
      flex: 1,
      marginTop: hp(20),
    },
    input: {
      marginTop: hp(3),
    },
    button: {
      backgroundColor: '#06b897',
      borderRadius: 20,
      padding: 13,
      marginTop: 10,
    },
    text: {
      color: '#ffffff',
      fontSize: 20,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    iconSection: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    dashboardImage: {
      width: wp(5),
      height: hp(7),
      margin: 'auto',
    },
    ImageSection: {
      backgroundColor: '#f0f2f1',
      padding: 10,
      borderRadius: 10,
    },
    imageText: {
      textAlign: 'center',
      paddingBottom: 1,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#707372',
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },
    columnRow: {
      flex: 1,
    },
  })
}
