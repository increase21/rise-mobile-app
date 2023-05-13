
import React from "react";
import { AppSvgProps } from "../../typings/components";
import Svg, {
   Path, Rect,
} from 'react-native-svg';

export const XIcon = (props: AppSvgProps) => (
   <Svg width={props.width || "22"} height={props.height || "21"} viewBox="0 0 22 21" fill="none">
      <Path d="M16.0059 15.6689L5.99439 5.65748" stroke={props.stroke || "#0898A0"} strokeWidth={props.strokeWidth || "2"} />
      <Path d="M5.99414 15.6689L16.0056 5.65748" stroke={props.stroke || "#0898A0"} strokeWidth={props.strokeWidth || "2"} />
   </Svg>
)
