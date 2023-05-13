import React from "react";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { Dimensions } from "react-native";

const useDimension = () => {
   const dimension = Dimensions.get('screen');
   const isSmaillScreen = dimension.width < dimension.height || dimension.width < 768
   return isSmaillScreen ? {
      width: dimension.width,
      height: dimension.height,
      wp: widthPercentageToDP,
      hp: heightPercentageToDP
   } : {
      width: dimension.width,
      height: dimension.height,
      hp: widthPercentageToDP,
      wp: heightPercentageToDP
   }
}

export default useDimension;