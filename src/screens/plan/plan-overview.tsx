import React from "react";
import { View } from "react-native-animatable";
import { ImageBackground, ScrollView, StatusBar } from "react-native";
import { PlanOverViewBg } from "../../assets/images";
import useDimension from "../../helpers/app-dimension";
import AppHeader from "../../components/app-header";
import { AppSizeBox } from "../../components/app-card";
import { COLORS } from "../../constants/app-colors";
import { AppIndicatorLoader, AppLayout } from "../../components/custom-ui";
import { OverViewPlanMetaData, OverviewPlanBalance } from "./components/plan-details";
import { PlanOverViewGraph, PlanReviewGraph } from "./components/plan-graphs";
import { PlanScreenProps } from "../../typings/navigations";
import { PLANSCREEN } from "../../constants/screens";
import PlanMethods from "./-plan-methods";
import SuccessPage from "../../components/success-page";
import helpers from "../../helpers";
const { wp, hp } = useDimension()


export default ({ navigation, route }: PlanScreenProps<PLANSCREEN.PLAN_OVERVIEW>) => {
   let param: any = route.params

   const { isLoading, data, refetch, error } = PlanMethods.getPlan("plan-overview", true, param?.id)

   let createdOn = data ? new Date(data?.data?.created_at) : new Date()
   let matureOn = data ? new Date(data?.data?.maturity_date) : new Date()

   if (isLoading) {
      return <AppIndicatorLoader />
   }

   if (error || !param?.id) {
      return <SuccessPage status="error" btnTitle="Reload"
         comment="Could not get plan details"
         onCancel={() => helpers.resetNavigation(navigation, PLANSCREEN.INDEX_SCREEN)}
         onPress={() => refetch()} title={`Request Failed`} />
   }
   return (
      <View>
         <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
         <ImageBackground source={PlanOverViewBg} style={{ width: '100%' }}>
            <AppSizeBox marginTop={hp(.8)} />
            <AppHeader appCircleStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
               title="Start a business" subTitle={`for ${data?.data?.plan_name}`}
               viewStyle={{ paddingHorizontal: 15 }} subTitleStyle={{ color: COLORS.WHITE }}
               titleStyle={{ color: COLORS.WHITE }} backIconSvgStyle={{ stroke: COLORS.WHITE }} />
            <AppSizeBox marginBottom={hp(.6)} />
         </ImageBackground>
         <AppLayout safeAreaView={false} style={{ height: hp(75) }} >
            <ScrollView showsVerticalScrollIndicator={false}>
               <OverviewPlanBalance data={data.data} />
               <AppSizeBox marginBottom={hp(.4)} />
               <PlanOverViewGraph data={data.data} />
               <AppSizeBox marginBottom={hp(.4)} />
               <OverViewPlanMetaData title="Total earnings" comment={"$" + (data?.data?.total_returns + data?.data?.invested_amount)} />
               <OverViewPlanMetaData title="Current earnings" comment={"$" + data?.data?.total_returns} />
               <OverViewPlanMetaData title="Deposit value" comment={"$" + String(data?.data?.invested_amount || 0)} />
               <OverViewPlanMetaData title="Balance in Naira (*₦505)" comment={"₦" + (505 * (data?.data?.invested_amount || 0)).toLocaleString()} />
               <OverViewPlanMetaData title="Plan created on" comment={createdOn.toDateString()} />
               <OverViewPlanMetaData title="Maturity date" comment={matureOn.toDateString()} />
               <AppSizeBox marginBottom={hp(.4)} />
            </ScrollView>
         </AppLayout>
      </View>
   )
}