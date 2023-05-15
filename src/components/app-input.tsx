import React from "react";
import { TextInputProps, View, ViewProps, StyleProp, TextInput, TextProps, StyleSheet } from 'react-native'
import { AppText } from "./app-text";
import { COLORS } from "../constants/app-colors";
import useDimension from "../helpers/app-dimension";
const { wp, hp } = useDimension()

interface AppInput extends TextInputProps {
   label?: string;
   ref?: any;
   viewProps?: ViewProps;
   textProps?: TextProps;
   keepOnFocus?: Boolean;
}


const AppInput = React.forwardRef<TextInput, AppInput>((props, ref) => {
   const [isFocus, setIsFocus] = React.useState(false)
   const [inputTxt, setInputTxt] = React.useState('')
   return (
      <View {...props?.viewProps} style={[dStyle.vwStyl, props?.viewProps?.style, isFocus && { borderColor: COLORS.PRIMARY }]}>
         {((isFocus || props.keepOnFocus) && props.label) && <AppText {...props?.textProps} style={[dStyle.textStyl, props?.textProps?.style]} >{props?.label}</AppText>}
         <TextInput {...props} ref={ref} placeholder={isFocus ? '' : props?.label}
            placeholderTextColor={props?.placeholderTextColor || COLORS.BLACK1}
            style={[dStyle.inputStyl, props?.style]}
            onChangeText={(txt) => {
               typeof props?.onChangeText === "function" && props?.onChangeText(txt)
               setInputTxt(txt)
            }}
            onFocus={(e) => {
               typeof props?.onFocus === "function" && props?.onFocus(e)
               setIsFocus(true)
            }}
            onBlur={(e) => {
               typeof props?.onBlur === "function" && props?.onBlur(e)
               //if the user isn't keeping focus active and input value is empty, 
               //set focus to false
               if (!props?.keepOnFocus && inputTxt.length === 0) setIsFocus(false)

            }}
         />
      </View>
   )
})

export const AppCustomInput = (props: AppInput) => (
   <View {...props?.viewProps} style={[dStyle.vwStyl, { paddingHorizontal: 15 }, props?.viewProps?.style, props?.keepOnFocus && { borderColor: COLORS.PRIMARY }]}>
      {props.label && props.keepOnFocus && <AppText {...props?.textProps} style={[dStyle.textStyl, props?.textProps?.style]} >{props?.label}</AppText>}
      {props?.children}
   </View>
)


const dStyle = StyleSheet.create({
   textStyl: {
      position: 'absolute', top: 0,
      marginTop: hp(-1.4), backgroundColor: COLORS.WHITE,
      color: COLORS.PRIMARY, fontWeight: '700',
      fontSize: wp(2.6), left: 0, marginLeft: wp(3.5),
      paddingHorizontal: 8,
   },
   inputStyl: {
      height: '100%',
      fontWeight: '700',
      paddingHorizontal: 15,
   },
   vwStyl: {
      borderColor: COLORS.GRAY2,
      borderRadius: 5, borderWidth: 1,
      height: hp(7.5),
      position: 'relative'
   },
})
export default AppInput;
