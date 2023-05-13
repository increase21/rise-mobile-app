import React from "react";
import { AppSvgProps } from "../../typings/components";
import Svg, {
   Path, Rect,
} from 'react-native-svg';

export const InfoIcon = (props: AppSvgProps) => (
   <Svg width={props.width || "20"} height={props.height || "21"} viewBox="0 0 20 21" fill="none">
      <Path d="M9 7.40918H11V5.40918H9V7.40918ZM10 18.4092C5.59 18.4092 2 14.8192 2 10.4092C2 5.99918 5.59 2.40918 10 2.40918C14.41 2.40918 18 5.99918 18 10.4092C18 14.8192 14.41 18.4092 10 18.4092ZM10 0.40918C8.68678 0.40918 7.38642 0.667837 6.17317 1.17038C4.95991 1.67293 3.85752 2.40953 2.92893 3.33811C1.05357 5.21348 0 7.75701 0 10.4092C0 13.0613 1.05357 15.6049 2.92893 17.4802C3.85752 18.4088 4.95991 19.1454 6.17317 19.648C7.38642 20.1505 8.68678 20.4092 10 20.4092C12.6522 20.4092 15.1957 19.3556 17.0711 17.4802C18.9464 15.6049 20 13.0613 20 10.4092C20 9.09596 19.7413 7.7956 19.2388 6.58235C18.7362 5.36909 17.9997 4.2667 17.0711 3.33811C16.1425 2.40953 15.0401 1.67293 13.8268 1.17038C12.6136 0.667837 11.3132 0.40918 10 0.40918ZM9 15.4092H11V9.40918H9V15.4092Z" fill={props.fill || "#0898A0"} />
   </Svg>
)


