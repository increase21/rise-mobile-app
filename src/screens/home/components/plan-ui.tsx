import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Swiper from 'react-native-swiper'
import { AppText } from "../../../components/app-text";
import useDimension from "../../../helpers/app-dimension";
import { ArrowCurve, HomePlanImg1, HomePlanImg2, LeftArrow, NotificationBell, PasswordClose, PlusIcon, QuestionMark } from "../../../assets/svg";
import { COLORS } from "../../../constants/app-colors";
import AppCard, { AppSizeBox } from "../../../components/app-card";
import DotIndicator from "../../../components/app-dot-indicator";
import AppButton from "../../../components/app-button";
import { AppCircle } from "../../../components/custom-ui";
const { wp, hp } = useDimension()

interface CreatedPlanProps {
   title: string;
   amount: string;
   assetType: string,
   imageSrc: React.ReactNode
}
const CreatePlan = () => (
   <AppCard style={dStyle.slide1} backgroundColor={COLORS.GRAY2} alignItems="center">
      <AppCircle width={wp(13)} height={hp(5.6)} isButton
         style={{ backgroundColor: 'rgba(64, 187, 195, 0.15)', marginBottom: hp(1) }}>
         <PlusIcon fill="transparent" strokeWidth={2} />
      </AppCircle>
      <AppText bold textAlign="center">Create an {'\n'} investment plan</AppText>
   </AppCard>
)

const CreatedPlan = (props: CreatedPlanProps) => (
   <AppCard style={dStyle.activePlan} backgroundColor={COLORS.GRAY2}>
      {props.imageSrc}
      <View style={dStyle.actPlanContnt}>
         <AppText color={COLORS.WHITE}>{props.title}</AppText>
         <AppText color={COLORS.WHITE} fontSize={wp(1.5)}>{props.amount}</AppText>
         <AppText color={COLORS.WHITE}>{props.assetType}</AppText>
      </View>
   </AppCard>
)

export const PlanUI = () => (
   <View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
         <AppText fontFamily="Tomato" fontSize={wp(1.1)} >Create a plan</AppText>
         <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <AppText style={{ marginRight: wp(1) }} fontFamily="DMSans" fontSize={3.2} bold>View all plans</AppText>

            <ArrowCurve width={wp(2.7)} style={{ transform: [{ rotate: '-90deg' }] }} />
         </View>
      </View>
      <AppText style={{ marginVertical: wp(3) }}>Start your investment journey by creating a plan</AppText>
      <View style={{ position: 'relative', height: hp(30) }}>
         <ScrollView decelerationRate="fast" pagingEnabled snapToInterval={wp(50)}
            snapToAlignment="start" showsHorizontalScrollIndicator={false}
            horizontal bounces={false} scrollEventThrottle={10}>
            <CreatePlan />
            <CreatedPlan imageSrc={<HomePlanImg1 height={"100%"} />} title="Build Wealth" amount="$188.25" assetType="Mixed assets" />
            <CreatedPlan imageSrc={<HomePlanImg2 height={"100%"} />}
               title="Build Life" amount="$388.00" assetType="Mixed assets" />
         </ScrollView>
      </View>
   </View>
)


export const PlanHelp = () => (
   <AppCard backgroundColor={COLORS.WHITE} padding={wp(.8)}
      flexDirection="row" justifyContent="space-between"
      style={{
         borderRadius: 12,
         shadowColor: 'rgba(53, 71, 89, 0.15)',
         shadowOffset: { height: 1, width: 1 },
         shadowOpacity: 1,
         shadowRadius: 6
      }}
   >
      <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 6 }}>
         <AppCircle width={wp(6)} height={wp(6)}>
            <QuestionMark />
         </AppCircle>
         <AppText style={{ marginLeft: wp(3) }}>Need Help</AppText>
      </View>
      <AppButton style={{ width: wp(36) }}>
         <AppText color={COLORS.WHITE}>Contact us</AppText>
      </AppButton>
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
      justifyContent: 'center',
      marginRight: wp(5)
   },
   activePlan: {
      width: wp(50),
      overflow: 'hidden',
      alignItems: 'center',
      // justifyContent: 'center',
      marginRight: wp(5)
   },
   actPlanContnt: {
      position: 'absolute', bottom: 0, left: 0,
      paddingHorizontal: wp(4), paddingVertical: hp(2.5)
   }
})