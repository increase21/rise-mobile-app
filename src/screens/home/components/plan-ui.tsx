import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Swiper from 'react-native-swiper'
import { AppText } from "../../../components/app-text";
import useDimension from "../../../helpers/app-dimension";
import { ArrowCurve, HomePlanImg1, HomePlanImg2, LeftArrow, NotificationBell, PasswordClose, PlusIcon, QuestionMark } from "../../../assets/svg";
import { COLORS } from "../../../constants/app-colors";
import AppCard, { AppSizeBox } from "../../../components/app-card";
import DotIndicator from "../../../components/app-dot-indicator";
import AppButton from "../../../components/app-button";
import { AppCircle } from "../../../components/custom-ui";
import { ComponentNavigation } from "../../../typings/components";
import helpers from "../../../helpers";
import { HOMESCREEN, PLANSCREEN } from "../../../constants/screens";
import { FR_AC_JSB, FR_JSB } from "../../../constants/global-style";
const { wp, hp } = useDimension()

interface CreatedPlanProps {
   title: string;
   amount: string;
   assetType: string,
   imageSrc: React.ReactNode;
   navigation: any;
   dataID: string
}

type PlanDataObject = {
   items: [],
   item_count: 0
}

interface PlanUIProps {
   data: PlanDataObject;
   isLoading: boolean;
   navigation: any;
}

const CreatePlan = ({ navigation }: ComponentNavigation) => (
   <AppCard style={dStyle.slide1} backgroundColor={COLORS.GRAY2} alignItems="center">
      <AppCircle width={wp(12.2)} height={hp(6)} isButton
         onPress={() => helpers.navigateToScreen(navigation, HOMESCREEN.PLAN_SCREEN, { screen: PLANSCREEN.CREATE_PLAN })}
         style={{ backgroundColor: 'rgba(64, 187, 195, 0.15)', marginBottom: hp(1) }}>
         <PlusIcon fill="transparent" strokeWidth={2} />
      </AppCircle>
      <AppText bold textAlign="center">Create an {'\n'} investment plan</AppText>
   </AppCard>
)

const CreatedPlan = (props: CreatedPlanProps) => (
   <TouchableOpacity style={[dStyle.activePlan, { borderRadius: 10 }]}
      onPress={() => helpers.navigateToScreen(props.navigation, HOMESCREEN.PLAN_SCREEN,
         { screen: PLANSCREEN.PLAN_OVERVIEW, params: { id: props.dataID } })}>
      {props.imageSrc}
      <View style={dStyle.actPlanContnt}>
         <AppText color={COLORS.WHITE}>{props.title}</AppText>
         <AppText color={COLORS.WHITE} fontSize={wp(1.5)}>{props.amount}</AppText>
         <AppText color={COLORS.WHITE}>{props.assetType}</AppText>
      </View>
   </TouchableOpacity>
)

export const PlanUI = ({ data, navigation, isLoading }: PlanUIProps) => (
   <View>
      <View style={FR_JSB}>
         <AppText fontFamily="Tomato" fontSize={4.5} semiBold>{data?.item_count > 0 ? 'Your Plans' : 'Create a plan'}</AppText>
         <TouchableOpacity style={FR_AC_JSB} onPress={() => helpers.navigateToScreen(navigation, HOMESCREEN.PLAN_SCREEN)}>
            <AppText color={data?.item_count > 0 ? COLORS.PRIMARY : COLORS.GRAY3}
               style={{ marginRight: wp(1) }} fontFamily="DMSans" fontSize={3.2} bold>View all plans</AppText>
            <ArrowCurve stroke={data?.item_count > 0 ? undefined : COLORS.GRAY2} width={wp(2.7)}
               style={{ transform: [{ rotate: '-90deg' }] }} />
         </TouchableOpacity>
      </View>
      <AppSizeBox marginTop={hp(.2)} />
      {(!data?.item_count || data?.item_count === 0) &&
         <>
            <AppText>Start your investment journey by creating a plan</AppText>
            <AppSizeBox marginTop={hp(.4)} />
         </>
      }
      <View style={{ position: 'relative', height: hp(30) }}>
         <ScrollView decelerationRate="fast" pagingEnabled snapToInterval={wp(50)}
            snapToAlignment="start" showsHorizontalScrollIndicator={false}
            horizontal bounces={false} scrollEventThrottle={10}>
            <CreatePlan navigation={navigation} />
            {data?.items?.length > 0 && data?.items?.map((item: any, index: number) => (
               <CreatedPlan title={item.plan_name} amount={item?.target_amount} key={index}
                  imageSrc={(index % 2 === 0) ? <HomePlanImg1 height={"100%"} /> : <HomePlanImg2 height={"100%"} />}
                  assetType="Mixed assets" dataID={item?.id} navigation={navigation} />
            ))}
         </ScrollView>
      </View>
   </View>
)

export const PlanHelp = () => (
   <AppCard backgroundColor={COLORS.WHITE} padding={wp(.8)}
      flexDirection="row" justifyContent="space-between" style={dStyle.helpV}>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 6 }}>
         <AppCircle width={wp(6)} height={hp(2.7)}>
            <QuestionMark />
         </AppCircle>
         <AppText style={{ marginLeft: wp(3) }}>Need Help</AppText>
      </View>
      <AppButton style={{ width: wp(30), height: hp(6) }}>
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
      marginRight: wp(5)
   },
   actPlanContnt: {
      position: 'absolute', bottom: 0, left: 0,
      paddingHorizontal: wp(4), paddingVertical: hp(2.5)
   },
   helpV: {
      borderRadius: 12,
      shadowColor: 'rgba(53, 71, 89, 0.15)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1, elevation: 1, borderWidth: 1,
      shadowRadius: 6, borderColor: 'rgba(53, 71, 89, 0.05)'
   }
})