import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { AppCircle, AppLayout } from "../components/custom-ui";
import { TickRight } from "../assets/svg/tick-right";
import useDimension from "../helpers/app-dimension";
import { AppText } from "../components/app-text";
import { COLORS } from "../constants/app-colors";
import AppButton from "../components/app-button";
import * as Animatable from 'react-native-animatable';
const { wp, hp } = useDimension()

interface SuccessPageProps {
   title?: string;
   comment?: string;
   btnTitle?: string;
   onPress?: () => void
}

const SuccessPage = (props: SuccessPageProps) => (
   <Animatable.View style={dStyle.vStyle} animation="slideInUp" direction="alternate">
      <AppCircle width={wp(24)} height={hp(11)}>
         <TickRight />
      </AppCircle>
      <AppText fontFamily="Tomato" fontSize={4} textAlign="center" style={{ marginTop: hp(4), lineHeight: hp(2.7) }}>{props.title}</AppText>
      <AppText color={COLORS.GRAY1} textAlign="center" style={{ marginTop: 6 }}>{props.comment}</AppText>
      <View style={{ width: '100%', marginTop: hp(35) }}>
         <AppButton onPress={props.onPress}>
            <AppText color={COLORS.WHITE} fontWeight="700">{props.btnTitle || "Okay"}</AppText>
         </AppButton>
      </View>
   </Animatable.View>
)

const dStyle = StyleSheet.create({
   vStyle: {
      flexDirection: 'column', paddingHorizontal: wp(5),
      justifyContent: 'center', alignItems: 'center',
      position: 'absolute', width: '100%', left: 0,
      height: '100%', flex: 1, backgroundColor: COLORS.WHITE,
      top: 0, paddingTop: hp(20)
   }
})

export default SuccessPage