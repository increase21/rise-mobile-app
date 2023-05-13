import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import useDimension from "../helpers/app-dimension";
import { COLORS } from "../constants/app-colors";
const { wp, hp } = useDimension()

export interface AppCardProps extends ViewProps {
   padding?: number;
   paddingTop?: number;
   paddingHorizontal?: number;
   paddingVertical?: number;
   margin?: number;
   marginTop?: number;
   marginBottom?: number;
   marginLeft?: number | string;
   marginRight?: number | string;
   marginHorizontal?: number;
   marginVertical?: number;
   width?: number | string;
   height?: number | string;
   backgroundColor?: string;
   children?: React.ReactNode;
   flexDirection?: "row" | "column";
   justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
   alignItems?: "flex-start" | "flex-end" | "center";
}

// interface AppCardProps extends AppCardStyle {
//    flexDirection: "row" | "column";
//    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
//    alignItems: "flex-start" | "flex-end" | "center";
// }

const processPropsData = (props: AppCardProps) => ({
   ...(props.padding && { padding: wp(props.padding) }),
   ...(props.paddingTop && { paddingTop: wp(props.paddingTop) }),
   ...(props.paddingHorizontal && { paddingHorizontal: wp(props.paddingHorizontal) }),
   ...(props.paddingVertical && { paddingVertical: wp(props.paddingVertical) }),
   ...(props.margin && { margin: wp(props.margin) }),
   ...(props.marginTop && { marginTop: hp(props.marginTop) }),
   ...(props.marginBottom && { marginBottom: hp(props.marginBottom) }),
   ...(props.marginLeft && { marginLeft: typeof props.marginLeft === "string" ? props.marginLeft : wp(props.marginLeft) }),
   ...(props.marginRight && { marginRight: typeof props.marginRight === "string" ? props.marginRight : wp(props.marginRight) }),
   ...(props.marginHorizontal && { marginHorizontal: wp(props.marginHorizontal) }),
   ...(props.marginVertical && { marginVertical: hp(props.marginVertical) }),
   ...(props.height && { height: typeof props.height === "string" ? props.height : wp(props.height) }),
   ...(props.width && { width: typeof props.width === "string" ? props.width : wp(props.width) }),
   ...(props.backgroundColor && { backgroundColor: props.backgroundColor }),
   ...(props.flexDirection && { flexDirection: props.flexDirection }),
   ...(props.justifyContent && { justifyContent: props.justifyContent }),
   ...(props.alignItems && { alignItems: props.alignItems }),
})

const AppCard = (props: AppCardProps) => (
   <View {...props} style={[dStyle.vStyle, processPropsData(props), props.style]}>
      {props?.children}
   </View>
)


export const AppSizeBox = (props: AppCardProps) => (
   <View style={[processPropsData(props)]}></View>
)



export default AppCard





const dStyle = StyleSheet.create({
   vStyle: {
      width: '100%',
      position: 'relative',
      backgroundColor: COLORS.WHITE,
      borderRadius: 10,
   }
})