import React from "react";
import Svg, { Path } from 'react-native-svg';
import { AppSvgProps } from "../../typings/components";


export const LeftArrow = (props?: AppSvgProps) => (
   <Svg {...props} width={props?.width || "16"} height={props?.height || "16"} viewBox="0 0 16 16" fill="none" >
      <Path d="M15.6425 8.17286H2.31445M2.31445 8.17286L8.97849 1.50882M2.31445 8.17286L8.97849 14.8369" stroke={props?.stroke || "#0898A0"} strokeWidth={props?.strokeWidth || "2"} />
   </Svg>
)
