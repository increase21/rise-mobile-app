import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import useDimension from "../helpers/app-dimension";
import { COLORS } from "../constants/app-colors";
const { hp } = useDimension()


interface AppProgressBarProps {
   rootStyle?: ViewStyle,
   barStyle?: ViewStyle | any,
   progress?: number
}

const AppProgressBar = (props: AppProgressBarProps) => (
   <View style={[dStyle.vStyle, props.rootStyle]}>
      <View style={[dStyle.bStyle, props.barStyle,
      props.progress && { width: String(props.progress + '%') }]}></View>
   </View>
)

export default AppProgressBar

const dStyle = StyleSheet.create({
   vStyle: {
      width: '100%',
      height: hp(.8),
      backgroundColor: COLORS.GRAY4,
      borderRadius: 10,
      overflow: 'hidden'
   },
   bStyle: {
      backgroundColor: COLORS.primary,
      height: '100%',
      width: '0%',
      borderRadius: 50
   }
})