import React from "react";
import { AppCircle, AppLayout } from "../../components/custom-ui";
import AppHeader from "../../components/app-header";
import { View } from "react-native";
import { AppSizeBox } from "../../components/app-card";
import useDimension from "../../helpers/app-dimension";
import { AppText } from "../../components/app-text";
import { COLORS } from "../../constants/app-colors";
const { hp, wp } = useDimension()

export default () => {
   return (
      <AppLayout>
         <AppHeader title="Review" />
         <AppSizeBox marginTop={hp(.3)} />
         <View style={{ alignItems: 'center' }}>
            <AppText fontSize={wp(.7)} color={COLORS.GRAY1}>Kate Ventures</AppText>
            <AppText style={{ marginVertical: hp(.5) }} bold fontFamily="Tomato" fontSize={wp(1.4)} color={COLORS.BLACK1}>$10,930.75</AppText>
            <AppText color={COLORS.BLACK1}>by 20 June 2021</AppText>
         </View>
         <AppSizeBox marginTop={hp(.3)} />
         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <AppCircle backgroundColor={COLORS.GRAY3} height={hp(1)} width={wp(2)} style={{ marginRight: wp(2) }} />
               <AppText fontSize={wp(.7)}>
                  Investments • $50,400
               </AppText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <AppCircle backgroundColor={COLORS.primary} height={hp(1)} width={wp(2)} style={{ marginRight: wp(2) }} />
               <AppText fontSize={wp(.7)}>
                  Returns • $20,803
               </AppText>
            </View>
         </View>
      </AppLayout >
   )
}