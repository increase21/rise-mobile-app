import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from "./auth-stack";
import { PlanScreenParamList } from "../typings/navigations";
import { PLANSCREEN } from "../constants/screens";
import Plan from "../screens/plan";
import CreatePlan from "../screens/plan/create-plan";
import CreatePlan2 from "../screens/plan/create-plan2";
import ReviewPlan from "../screens/plan/review-plan";

const RootStack = createStackNavigator<PlanScreenParamList>()

export default () => (
   <RootStack.Navigator initialRouteName={PLANSCREEN.INDEX_SCREEN} screenOptions={{ headerShown: false }} >
      <RootStack.Screen name={PLANSCREEN.CREATE_PLAN} component={CreatePlan} />
      <RootStack.Screen name={PLANSCREEN.REVIEW_PLAN} component={ReviewPlan} />
      <RootStack.Screen name={PLANSCREEN.CREATE_PLAN2} component={CreatePlan2} />
      <RootStack.Screen name={PLANSCREEN.INDEX_SCREEN} component={Plan} />
   </RootStack.Navigator>
)