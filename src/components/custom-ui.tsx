import React from "react";
import { StyleSheet, TouchableOpacity, View, SafeAreaView, ViewProps, ViewStyle, ActivityIndicator, } from "react-native";
import appDimension from '../helpers/app-dimension'
import { AppText } from "./app-text";
import { KeyboardDelete } from "../assets/svg";
import { COLORS } from "../constants/app-colors";
const { wp, hp } = appDimension()

interface GrayCircleProps {
   backgroundColor?: string;
   width?: number;
   height?: number;
   isButton?: boolean;
   style?: ViewStyle;
   children?: React.ReactNode;
   onPress?: (value?: any) => void;
}

const dStyle = StyleSheet.create({
   vStyl: {
      backgroundColor: 'rgba(113, 135, 156, 0.1)',
      borderRadius: 50,
      width: wp(10), height: hp(5),
      flexDirection: 'row',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center'
   },
   appLayStyle: {
      height: '100%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      position: 'relative'
   }
})


export const AppCircle = (props: GrayCircleProps) => (
   props?.isButton ?
      <TouchableOpacity {...props} style={[dStyle.vStyl, props.style, {
         ...(props.width && { width: props.width }),
         ...(props.height && { height: props.height }),
         ...(props.backgroundColor && { backgroundColor: props.backgroundColor })
      }]}>
         {props?.children}
      </TouchableOpacity> :
      <View style={[dStyle.vStyl, props.style, {
         ...(props.width && { width: props.width }),
         ...(props.height && { height: props.height }),
         ...(props.backgroundColor && { backgroundColor: props.backgroundColor })
      }]}>
         {props?.children}
      </View>
)


export const AppLayout = (props: { style?: ViewStyle, safeAreaView?: boolean, children?: any }) => (
   props?.safeAreaView === false ?
      <View style={[dStyle.appLayStyle, { backgroundColor: COLORS.WHITE }, props.style]}>
         {props?.children}
      </View> :
      <SafeAreaView style={{ backgroundColor: COLORS.WHITE }}>
         <View style={[dStyle.appLayStyle, props.style]}>
            {props?.children}
         </View>
      </SafeAreaView>
)


interface AppKeyBoardProps extends ViewProps {
   onPress?: any
}

const KeyboardRow = (props = { title1: '', title2: '', title3: '', onPress: (value?: any) => { } }) => (
   <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 24 }}>
      <AppCircle isButton width={wp(15)} height={hp(7.5)} onPress={() => props?.onPress(props?.title1)}>
         <AppText color={COLORS.PRIMARY} semiBold fontSize={6}>{props?.title1}</AppText>
      </AppCircle>
      <AppCircle isButton width={wp(15)} height={hp(7.5)} onPress={() => props?.onPress(props?.title2)}>
         <AppText color={COLORS.PRIMARY} semiBold fontSize={6}>{props?.title2}</AppText>
      </AppCircle>
      <AppCircle isButton width={wp(15)} height={hp(7.5)} onPress={() => props?.onPress(props?.title3)}>
         {props?.title3 === "x" ? <KeyboardDelete width={30} height={17} /> :
            <AppText color={COLORS.PRIMARY} semiBold fontSize={6}>{props?.title3}</AppText>}
      </AppCircle>
   </View>
)

export const AppKeyBoard = (props?: AppKeyBoardProps) => (
   <View {...props}>
      <KeyboardRow onPress={props?.onPress} title1="1" title2="2" title3="3" />
      <KeyboardRow onPress={props?.onPress} title1="4" title2="5" title3="6" />
      <KeyboardRow onPress={props?.onPress} title1="7" title2="8" title3="9" />
      <KeyboardRow onPress={props?.onPress} title1="." title2="0" title3="x" />
   </View>
)

export const AppIndicatorLoader = (props: { style?: ViewStyle, loaderColor?: string }) => (
   <View style={[{
      flexDirection: 'row', justifyContent: 'center', flex: 1,
      backgroundColor: COLORS.WHITE, alignItems: 'center',
   }, props.style]}>
      <ActivityIndicator size="large" color={props.loaderColor || COLORS.PRIMARY} />
   </View>
)
