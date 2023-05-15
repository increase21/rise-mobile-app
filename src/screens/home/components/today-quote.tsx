import React from "react";
import { ScrollView, StyleSheet, View, Share, ShareContent, } from "react-native";
import Swiper from 'react-native-swiper'
import { AppText } from "../../../components/app-text";
import useDimension from "../../../helpers/app-dimension";
import { ArrowCurve, LeftArrow, NotificationBell, PasswordClose, PlusIcon, QuestionMark, ShareIcon } from "../../../assets/svg";
import { COLORS } from "../../../constants/app-colors";
import AppCard, { AppSizeBox } from "../../../components/app-card";
import DotIndicator from "../../../components/app-dot-indicator";
import AppButton from "../../../components/app-button";
import { AppCircle, AppIndicatorLoader } from "../../../components/custom-ui";
import AuthMethods from "../../auth/-auth-methods";
const { wp, hp } = useDimension()


export const TodayQuote = () => {
   const { isLoading, data, refetch } = AuthMethods.getQuotes(true)
   let shareMsg: ShareContent = {
      title: "Today's Quote",
      message: data?.data?.quote + "\n" + data?.data?.authour + 'Quote'
   }
   return (
      <AppCard backgroundColor={COLORS.primary} padding={wp(.8)}>
         <AppText bold textTransform="uppercase" color={COLORS.WHITE}>Today's quotes</AppText>
         <View style={{
            borderWidth: 1, marginTop: hp(3),
            borderColor: COLORS.WHITE, maxWidth: wp(10)
         }}></View>
         <AppSizeBox marginVertical={1.5} />
         {isLoading && <AppIndicatorLoader />}
         <AppText color={COLORS.WHITE}>{data?.data?.quote}</AppText>
         <AppSizeBox marginVertical={2} />
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <AppText bold color={COLORS.WHITE}>{data?.data?.author}</AppText>
            <AppCircle isButton height={hp(4.8)}
               width={wp(10)} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
               onPress={() => Share.share(shareMsg)}
            >
               <ShareIcon />
            </AppCircle>
         </View>
      </AppCard>
   )
}

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