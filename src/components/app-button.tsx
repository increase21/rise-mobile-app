import React from "react";
import { ActivityIndicator, ButtonProps, Pressable, StyleSheet, TextProps, ViewProps } from "react-native";
import { COLORS } from "../constants/app-colors";
import appDimension from '../helpers/app-dimension'
const { wp, hp } = appDimension()

interface AppButtonProps extends ViewProps {
   title?: string | any;
   disabled?: boolean;
   backgroundColor?: any;
   isLoading?: Boolean | any;
   onPress?: () => void;
}


const AppButton = (props: AppButtonProps) => (
   <Pressable {...props} disabled={props.disabled || props.isLoading}
      onPress={props.onPress} style={({ pressed }) => [
         dStyle.btnStyl, props?.style,
         (props.backgroundColor) && { backgroundColor: props.backgroundColor },
         (pressed || props?.disabled) && { opacity: .3 }
      ]}>
      {props.isLoading ?
         <ActivityIndicator size="small" color={COLORS.WHITE} /> : props?.children}
   </Pressable>
)

const dStyle = StyleSheet.create({
   btnStyl: {
      backgroundColor: COLORS.primary,
      width: '100%', height: hp(6.5),
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default AppButton;