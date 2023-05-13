import React from "react";
import { SafeAreaView, View } from "react-native";
import { AppCircle, AppLayout } from "../../components/custom-ui";
import { TickRight } from "../../assets/svg/tick-right";
import useDimension from "../../helpers/app-dimension";
import { AppText } from "../../components/app-text";
import { COLORS } from "../../constants/app-colors";
import AppButton from "../../components/app-button";
const { wp, hp } = useDimension()


export default () => (
   <AppLayout>
      <View style={{ marginTop: hp(14), flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
         <AppCircle width={wp(25)} height={hp(11)}>
            <TickRight />
         </AppCircle>
         <AppText fontSize={4} textAlign="center" style={{ marginTop: 30 }}>You’ve created your PIN</AppText>
         <AppText color={COLORS.GRAY1} textAlign="center" style={{ marginTop: 6 }}>Keep your account safe with your secret PIN. Do not share this PIN with anyone.</AppText>
         <View style={{ width: '100%', marginTop: hp(45) }}>
            <AppButton>
               <AppText color={COLORS.WHITE} fontWeight="700">Okay</AppText>
            </AppButton>
         </View>
      </View>
   </AppLayout>
)