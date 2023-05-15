import React from "react";
import { AppCircle, AppIndicatorLoader, AppLayout } from "../../components/custom-ui";
import AppHeader from "../../components/app-header";
import { ScrollView, View } from "react-native";
import AppCard, { AppSizeBox } from "../../components/app-card";
import useDimension from "../../helpers/app-dimension";
import { AppText } from "../../components/app-text";
import { COLORS } from "../../constants/app-colors";
import { PlanReviewGraph } from "./components/plan-graphs";
import { InfoIcon } from "../../assets/svg";
import { FR_AC_JSB } from "../../constants/global-style";
import AppButton from "../../components/app-button";
import SuccessPage from "../../components/success-page";
import { PlanScreenProps } from "../../typings/navigations";
import { PLANSCREEN } from "../../constants/screens";
import PlanMethods from "./-plan-methods";
import helpers from "../../helpers";
import { useStore } from "../../store";
const { hp, wp } = useDimension()

export default ({ navigation, route }: PlanScreenProps<PLANSCREEN.REVIEW_PLAN>) => {
   const [planState, setPlanState] = React.useState({ showSuccess: false, showError: false })
   //the user store
   const userData = useStore(store => store).userData
   //data to send to API
   let planData: any = route.params
   //get plan projection
   const { isLoading, data, error, refetch } = PlanMethods.getPlanProjection(planData)
   //create a plan
   const { processReqest: createPlanNow, isLoading: createPlanLoader } = PlanMethods.createPlan(setPlanState)

   console.log("Is loading", createPlanLoader, isLoading)
   // console.log(createdPlanData,createPlanLoader, "created data", planData)

   if (isLoading) {
      return <AppIndicatorLoader />
   }

   if (error || (data && data.statusCode != 200)) {
      return <SuccessPage status="error" btnTitle="Reload"
         comment="Could not get plan projection"
         onCancel={() => helpers.resetNavigation(navigation, PLANSCREEN.CREATE_PLAN2)}
         onPress={() => refetch()} title={`Request Failed`} />
   }
   return (
      <React.Fragment>
         <AppLayout style={{ paddingHorizontal: 0 }}>
            <AppHeader title="Review" viewStyle={{ paddingHorizontal: 15 }} />
            <AppSizeBox marginTop={hp(.3)} />
            <ScrollView showsVerticalScrollIndicator={false}>
               <PlanReviewGraph data={data?.data} planInfo={planData} />
               <View style={{ paddingHorizontal: 15 }}>
                  <AppSizeBox marginVertical={hp(0.35)} style={{ borderWidth: .8, borderColor: COLORS.GRAY2 }} />
                  <AppCard paddingVertical={hp(.5)} paddingHorizontal={wp(1)}
                     backgroundColor={COLORS.GRAY4} style={FR_AC_JSB}>
                     <InfoIcon />
                     <AppText style={{ flex: 1, marginLeft: wp(6) }}>Returns not guaranteed. Investing involves risk. Read our Disclosures.</AppText>
                  </AppCard>
                  <AppSizeBox marginVertical={hp(.2)} />
                  <AppText color={COLORS.GRAY1} textAlign="center">These are your starting settings, they can always be updated.</AppText>
                  <AppSizeBox marginVertical={hp(.2)} />
                  <AppButton isLoading={createPlanLoader} onPress={() => createPlanNow(planData)}>
                     <AppText bold color={COLORS.WHITE}>Agree & Continue</AppText>
                  </AppButton>
                  <AppButton onPress={() => helpers.resetNavigation(navigation, PLANSCREEN.CREATE_PLAN2)}
                     style={{ marginTop: 10, backgroundColor: COLORS.GRAY4 }}>
                     <AppText bold color={COLORS.primary}>Start Over</AppText>
                  </AppButton>
               </View>
            </ScrollView>
         </AppLayout >
         {planState.showSuccess &&
            <SuccessPage btnTitle="View Plan"
               comment={`Well Done, ${userData?.first_name}`}
               onPress={() => helpers.navigateToScreen(navigation, PLANSCREEN.PLAN_OVERVIEW, {
                  "created_at": "2023-05-14T19:04:23.448Z",
                  "id": "3df9a943-c99c-4ad8-9cb9-d4b91ca20221",
                  "invested_amount": 0, "maturity_date": "2024-05-31T00:00:00.000Z",
                  "plan_name": "Wife material", "returns": [], "target_amount": 10.65,
                  "total_returns": 0, "user_id": "e1b8665f-c2c5-41de-9d9b-186f13db049b"
               })} title={`You just created\nyour plan`} />
         }
      </React.Fragment>
   )
}