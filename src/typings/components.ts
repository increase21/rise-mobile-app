import { ViewStyle } from 'react-native'

export interface ComponentNavigation {
   navigation?: any,
   route?: any
}

// PROPS TYPE DEFINITION FOR SVG IMAGE
export interface AppSvgProps {
   width?: number | string;
   height?: number | string;
   stroke?: string;
   style?: ViewStyle;
   fill?: string;
   strokeWidth?: number;
   fillOpacity?: number;
   children?: any
}