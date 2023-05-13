import React from "react"
import { ViewStyle, ViewProps, View, StyleSheet } from "react-native"
import { COLORS } from "../constants/app-colors";


interface DotIndicatorProps {
   stage?: number;
   backgroundColor?: string;
   rootStyle?: ViewStyle,
   dotStyle?: ViewStyle,
   activeDotStyle?: ViewStyle
}


const DotIndicator = (props: DotIndicatorProps) => (
   <View style={[{ flexDirection: 'row' }, props.rootStyle]}>
      <View style={[dStyle.dotColor, props.dotStyle, props.stage === 1 && props.activeDotStyle]}></View>
      <View style={[dStyle.dotColor, props.dotStyle, props.stage === 2 && props.activeDotStyle]}></View>
      <View style={[dStyle.dotColor, props.dotStyle, props.stage === 3 && props.activeDotStyle]}></View>
   </View>
)

export default DotIndicator

const dStyle = StyleSheet.create({
   dotColor: {
      borderRadius: 50, height: 6,
      width: 6, backgroundColor: COLORS.GRAY2
   }
})