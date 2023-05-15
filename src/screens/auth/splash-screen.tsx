import React from "react";
import { StatusBar, View } from "react-native";
import { COLORS } from "../../constants/app-colors";
import { AppLogoGray, AppLogoWhite } from "../../assets/svg";
import { AppText } from "../../components/app-text";
import useDimension from "../../helpers/app-dimension";
import { AppSizeBox } from "../../components/app-card";
import { FR_AC_JSB, FR_JC_AC } from "../../constants/global-style";
import AuthMethods from "./-auth-methods";
import { AuthScreenProps } from "../../typings/navigations";
import { AUTHSCREENS, ROOTSCREEN } from "../../constants/screens";
const { wp, hp } = useDimension()

export default ({ navigation }: AuthScreenProps<AUTHSCREENS.SPLASH_SCREEN>) => {
   const { isLoading, error, data } = AuthMethods.validateSession('token-confirm', navigation)
   return (
      <View style={{ flex: 1, backgroundColor: COLORS.PRIMARY, }}>
         <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />

         <View style={{ flex: 1, marginTop: hp(18), alignItems: 'center', }}>
            <AppLogoWhite stroke={COLORS.WHITE} fill={COLORS.WHITE} fillOpacity={0} />
            <AppSizeBox marginTop={hp(1)} />
            <AppText color={COLORS.WHITE} textAlign="center" fontFamily="Tomato" fontSize={4}>{`Dollar investments that\nhelp you grow`}</AppText>
            <AppSizeBox marginTop={hp(5.7)} />
            <AppText fontFamily="Tomato" color={COLORS.WHITE} textAlign="center">{`All rights reserved\n(c) 2021`}</AppText>
         </View>
      </View>
   )
}