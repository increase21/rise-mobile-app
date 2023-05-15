import LinearGradient from 'react-native-linear-gradient';
import { AppText } from '../../../components/app-text';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/app-colors';
import useDimension from '../../../helpers/app-dimension';
import React from 'react';
const { hp } = useDimension()


interface HomeGradientsProps {
   children: React.ReactNode
}
// Within your render function
export const HomeGradients = (props: HomeGradientsProps) => (
   <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fcf2f9', '#f2faf4', '#ffffff', '#fcf2f9',]} style={styles.wrapper}>
      {props.children}
   </LinearGradient>
)

export const TotalBalanceGradient = (props: HomeGradientsProps) => (
   <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#faf7f7', '#ffffff']} style={[styles.wrapper, styles.wrapper2]}>
      {props.children}
   </LinearGradient>
)

// Later on in your styles..
var styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      width: '100%',
      paddingLeft: 15,
      paddingRight: 15,
   },
   wrapper2: {
      justifyContent: 'center',
      alignItems: 'center', paddingVertical: hp(1.5)
   }
});