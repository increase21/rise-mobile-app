
import React from "react";
import { AppSvgProps } from "../../typings/components";
import Svg, {
   Path,
} from 'react-native-svg';

export const ArrowCurve = (props: AppSvgProps) => (
   <Svg {...props} width={props.width || "14"} height={props.height || "9"} viewBox="0 0 14 9" fill="none">
      <Path d="M1 1.25L7 7.25L13 1.25" stroke={props.stroke || "#8B9EAB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>
)
