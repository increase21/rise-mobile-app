import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from "./auth-stack";
import { RootStackParam } from "../typings/navigations";
import { ROOTSCREEN } from "../constants/screens";
import HomeTab from "./home-tab";

const RootStack = createStackNavigator<RootStackParam>()

export default () => (
   <RootStack.Navigator initialRouteName={ROOTSCREEN.AUTH_SCREEN} screenOptions={{ headerShown: false }} >
      <RootStack.Screen name={ROOTSCREEN.AUTH_SCREEN} component={AuthStack} />
      <RootStack.Screen name={ROOTSCREEN.HOME_SCREEN} component={HomeTab} />
   </RootStack.Navigator>
)