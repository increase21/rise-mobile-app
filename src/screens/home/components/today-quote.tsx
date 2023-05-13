import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Swiper from 'react-native-swiper'
import { AppText } from "../../../components/app-text";
import useDimension from "../../../helpers/app-dimension";
import { ArrowCurve, LeftArrow, NotificationBell, PasswordClose, PlusIcon, QuestionMark, ShareIcon } from "../../../assets/svg";
import { COLORS } from "../../../constants/app-colors";
import AppCard, { AppSizeBox } from "../../../components/app-card";
import DotIndicator from "../../../components/app-dot-indicator";
import AppButton from "../../../components/app-button";
import { AppCircle } from "../../../components/custom-ui";
const { wp, hp } = useDimension()


export const TodayQuote = () => (
   <AppCard backgroundColor={COLORS.primary} padding={wp(.8)}>
      <AppText bold textTransform="uppercase" color={COLORS.WHITE}>Today's quotes</AppText>
      <View style={{
         borderWidth: 1, marginTop: hp(3),
         borderColor: COLORS.WHITE, maxWidth: wp(10)
      }}></View>
      <AppSizeBox marginVertical={1.5} />
      <AppText color={COLORS.WHITE}>We have no intention of rotating capital out of strong multi-year investments because they’ve recently done well or because ‘growth’ has out performed ‘value’.</AppText>
      <AppSizeBox marginVertical={2} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
         <AppText bold color={COLORS.WHITE}>Carl Sagan</AppText>
         <AppCircle isButton height={hp(4.8)} width={wp(10)} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <ShareIcon />
         </AppCircle>
      </View>
   </AppCard>
)

const dStyle = StyleSheet.create({
   swipeWrapper: {
      backgroundColor: 'red',
      flexDirection: 'row',
      position: 'absolute',
      top: 0,
      left: 0,
      flex: 0,
      paddingHorizontal: 0,
      paddingVertical: 0,
      justifyContent: 'flex-start',
   },
   slide1: {
      width: wp(50),
      // flex: 1,
      justifyContent: 'center',
      marginRight: wp(5)
   }
})