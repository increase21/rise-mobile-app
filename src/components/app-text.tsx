import React from "react";
import AppDimention from '../helpers/app-dimension'
import { Text, TextProps, TextStyle } from 'react-native'
const { wp, hp } = AppDimention()


interface AppTextProps extends TextProps {
   fontFamily?: 'DMSans' | 'Tomato';
   bold?: string | boolean;
   semiBold?: string | boolean;
   italic?: string | boolean;
   fontSize?: number;
   color?: string;
   textAlign?: 'center' | 'left' | 'right';
   fontWeight?: string;
   textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
}

const processTextStyle = (props: AppTextProps, wp: any): TextStyle | any => {
   return {
      ...{ fontSize: wp(3.6), color: '#222222' },
      ...(props?.fontSize && { fontSize: wp(props?.fontSize) }),
      ...(props?.color && { color: props.color }),
      ...(props?.textAlign && { textAlign: props.textAlign }),
      ...(props?.fontWeight && { fontWeight: props.fontWeight }),
      ...((props?.fontFamily === 'DMSans' || !props?.fontFamily) && { fontFamily: props.bold ? 'DMSans-Bold' : props.semiBold ? 'DMSans-Medium' : 'DMSans-Regular' }),
      ...(props?.fontFamily === 'Tomato' && { fontFamily: props.bold ? 'TomatoGrotesk-Bold' : props.semiBold ? 'TomatoGrotesk-Medium' : 'TomatoGrotesk-Regular' }),
      ...(props?.textTransform && { textTransform: props.textTransform })
   }
}

export const AppText = (props: AppTextProps) => (
   <Text {...props}
      style={[processTextStyle(props, wp), props.style]}>
      {props?.children}
   </Text>
)



