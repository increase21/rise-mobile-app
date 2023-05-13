import React from "react";
import Svg, { Path } from 'react-native-svg';
import { AppSvgProps } from "../../typings/components";




export const TickRight = (props?: AppSvgProps) => (
   <Svg width={props?.width || "39"} height={props?.height || "26"} viewBox="0 0 39 26" fill="none">
      <Path d="M2.36462 14.6629L12.4982 23.3705L36.6354 2.62946" stroke={props?.stroke || "#0898A0"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>
)
