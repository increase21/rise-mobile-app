
import React from "react";
import { AppSvgProps } from "../../typings/components";
import Svg, {
   Path, Rect,
} from 'react-native-svg';

export const PlusIcon = (props: AppSvgProps) => (
   <Svg width={props.width || "22"} height={props.height || "22"} viewBox="0 0 22 22" fill="none">
      <Rect width="21" height="21" transform="translate(0.5 0.5)" fill={props.fill || "white"} />
      <Path d="M4.1322 11H17.8678" stroke={props.stroke || "#0898A0"} strokeWidth={props.strokeWidth || "1.5"} strokeLinecap="round" />
      <Path d="M11 17.8678L11 4.13218" stroke={props.stroke || "#0898A0"} strokeWidth={props.strokeWidth || "1.5"} strokeLinecap="round" />
   </Svg>
)
