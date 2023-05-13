import React from "react";
import { View, ViewStyle, TextStyle, TouchableOpacity, StyleSheet } from "react-native";
import { AppText } from "./app-text";
import { AppCircle } from "./custom-ui";
import { LeftArrow, XIcon } from "../assets/svg";
import useDimension from "../helpers/app-dimension";
const { wp } = useDimension()

interface AppHederProps {
   title?: string;
   viewStyle?: ViewStyle;
   textStyle?: TextStyle;
   backIcon?: 'arrow' | 'close' | undefined,
   onBackPress?: () => void
}

const AppHeader = (props: AppHederProps) => (
   <View style={[dStyle.vStyl, props?.viewStyle]}>
      <View style={{ width: '20%' }}>
         <AppCircle isButton onPress={props.onBackPress}>
            {props?.backIcon === "close" ? <XIcon /> : <LeftArrow width={20} height={20} />}
         </AppCircle>
      </View>
      <AppText fontSize={wp(1.3)} fontFamily="Tomato" bold style={[dStyle.textStyle, props?.textStyle,]}>{props?.title}</AppText>
      <View style={{ width: '20%' }}></View>
   </View>
)

const dStyle = StyleSheet.create({
   vStyl: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   textStyle: {
      width: '60%',
      textAlign: 'center'
   }
})

export default AppHeader;