import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppText } from "../../components/app-text";
import { AppCircle, AppIndicatorLoader, AppLayout } from "../../components/custom-ui";
import AppHeader from "../../components/app-header";
import AppCard, { AppSizeBox } from "../../components/app-card";
import { COLORS } from "../../constants/app-colors";
import useDimension from "../../helpers/app-dimension";
import { HomePlanImg1, HomePlanImg3, LeftArrow, PlusIcon, QuestionMark } from "../../assets/svg";
import AppButton from "../../components/app-button";
import { PlanScreenProps } from "../../typings/navigations";
import { HOMESCREEN, PLANSCREEN, ROOTSCREEN } from "../../constants/screens";
import { ComponentNavigation } from "../../typings/components";
import SuccessPage from "../../components/success-page";
import helpers from "../../helpers";
import PlanMethods from "./-plan-methods";
const { hp, wp } = useDimension()

const NoCreatedPlan = ({ navigation }: ComponentNavigation) => (
   <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <AppCircle isButton height={hp(11)} width={wp(25)} onPress={() => navigation.navigate(PLANSCREEN.CREATE_PLAN)}>
         <PlusIcon strokeWidth={3} height={hp(10.3)} width={wp(10)} fill="transparent" />
      </AppCircle>
      <AppSizeBox marginBottom={hp(.3)} />
      <AppText color={COLORS.GRAY1}>No Active Plan</AppText>
   </View>
)

const CreatedPlan = (props: { imageSrc: React.ReactNode, title: string, amount: string, assetType: string, id: string, navigation: any }) => (
   <TouchableOpacity style={dStyle.activePlan} onPress={() => helpers.navigateToScreen(props.navigation, PLANSCREEN.PLAN_OVERVIEW, { id: props.id })}>
      {props.imageSrc}
      <View style={dStyle.actPlanContnt}>
         <AppText color={COLORS.WHITE}>{props.title}</AppText>
         <AppText color={COLORS.WHITE} fontSize={wp(1.5)}>{props.amount}</AppText>
         <AppText color={COLORS.WHITE}>{props.assetType}</AppText>
         <View style={{ position: 'absolute', right: 0, bottom: 0, marginBottom: hp(2), marginRight: 10 }}>
            <LeftArrow stroke={COLORS.WHITE} style={{ transform: [{ rotate: '180deg' }] }} />
         </View>
      </View>
   </TouchableOpacity>
)

export default ({ navigation }: PlanScreenProps<PLANSCREEN.INDEX_SCREEN>) => {
   const { isLoading, data, refetch, error } = PlanMethods.getPlan("plan-index", true)

   if (isLoading) {
      return <AppIndicatorLoader />
   }
   console.log("index mounted")
   if (error) {
      return <SuccessPage status="error" btnTitle="Reload"
         comment="Could not get plan details"
         onCancel={() => helpers.resetNavigation(navigation, HOMESCREEN.INDEX_SCREEN)}
         onPress={() => refetch()} title={`Request Failed`} />
   }
   return (
      <AppLayout>
         <AppHeader backIcon="close" title="Plan" />
         <AppSizeBox marginTop={hp(.2)} />
         <AppText textAlign="center" color={COLORS.GRAY1}>Tap on any of the plans to select</AppText>
         {data?.data?.items?.length > 0 ?
            <ScrollView showsVerticalScrollIndicator={false}>
               <AppSizeBox paddingTop={hp(.7)} />
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: "wrap" }}>
                  {data?.data?.items?.map((item?: any, index?: any) => <CreatedPlan key={index}
                     imageSrc={<HomePlanImg1 height={"100%"} />}
                     title={item.plan_name} amount={"$" + item.target_amount}
                     assetType="" navigation={navigation} id={item.id} />)}
               </View>
            </ScrollView>
            : <NoCreatedPlan navigation={navigation} />}

      </AppLayout>
   )
}

const dStyle = StyleSheet.create({
   activePlan: {
      width: wp(42.5),
      overflow: 'hidden',
      alignItems: 'center',
      height: hp(30),
      marginBottom: hp(2),
      borderRadius: 15,
   },
   actPlanContnt: {
      position: 'absolute', bottom: 0, left: 0, width: '100%',
      paddingHorizontal: wp(4), paddingVertical: hp(2.5)
   }
})