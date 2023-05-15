import React from "react";
import { View, ViewStyle, TextStyle, TouchableOpacity, StyleSheet } from "react-native";
import { AppText } from "./app-text";
import { AppCircle } from "./custom-ui";
import { LeftArrow, XIcon } from "../assets/svg";
import useDimension from "../helpers/app-dimension";
import { AppSvgProps } from "../typings/components";
import { useNavigation } from "@react-navigation/core";
const { wp } = useDimension()

interface AppHederProps {
   title?: string;
   subTitle?: string,
   viewStyle?: ViewStyle;
   titleStyle?: TextStyle;
   subTitleStyle?: TextStyle;
   appCircleStyle?: ViewStyle;
   backIcon?: 'arrow' | 'close' | undefined,
   backIconSvgStyle?: AppSvgProps
   onBackPress?: () => void
}

const AppHeader = (props: AppHederProps) => {
   const navigation = useNavigation()
   return (
      <View style={[dStyle.vStyl, props?.viewStyle]}>
         <View style={{ width: '20%' }}>
            <AppCircle style={props.appCircleStyle} isButton
               onPress={typeof props.onBackPress === "function" ?
                  props.onBackPress : () => navigation?.goBack()}>
               {props?.backIcon === "close" ?
                  <XIcon
                     stroke={props.backIconSvgStyle?.stroke}
                     fill={props.backIconSvgStyle?.fill}
                     strokeWidth={props.backIconSvgStyle?.strokeWidth}
                     width={props.backIconSvgStyle?.width || 20}
                     height={props.backIconSvgStyle?.height || 20} /> :
                  <LeftArrow
                     stroke={props.backIconSvgStyle?.stroke}
                     fill={props.backIconSvgStyle?.fill}
                     strokeWidth={props.backIconSvgStyle?.strokeWidth}
                     width={props.backIconSvgStyle?.width || 20}
                     height={props.backIconSvgStyle?.height || 20} />}
            </AppCircle>
         </View>
         <View style={{ width: '60%' }}>
            <AppText fontSize={wp(1.3)} fontFamily="Tomato"
               bold style={[dStyle.titleStyle, props?.titleStyle]}>
               {props?.title}
            </AppText>
            <AppText textAlign="center" style={[props?.subTitleStyle,]}>
               {props?.subTitle}
            </AppText>
         </View>
         <View style={{ width: '20%' }}></View>
      </View>
   )
}

const dStyle = StyleSheet.create({
   vStyl: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   titleStyle: {
      textAlign: 'center'
   }
})

export default AppHeader;