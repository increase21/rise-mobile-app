import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HometabParamList } from "../typings/navigations";
import { HOMESCREEN } from "../constants/screens";
import Home from "../screens/home";
import Wallet from "../screens/wallet";
import Feed from "../screens/feed";
import Profile from "../screens/profile";
import { HomeNavHomeIcon, HomeNavPlanIcon, HomeNavWalletIcon } from "../assets/svg";
import { AppCircle } from "../components/custom-ui";
import useDimension from "../helpers/app-dimension";
import { COLORS } from "../constants/app-colors";
import { AppText } from "../components/app-text";
import PlanStack from "./plan-stack";
const { wp, hp } = useDimension()
const HomeTab = createBottomTabNavigator<HometabParamList>()


const runTabBarLabel = (label?: any, focused?: boolean, color?: string) => (
   focused ? <AppCircle width={wp(2.5)} height={hp(1.2)} style={{ backgroundColor: COLORS.PRIMARY }} /> :
      <AppText color={focused ? COLORS.PRIMARY : color} fontSize={wp(.6)}>{label}</AppText>
)

export default () => (
   <HomeTab.Navigator initialRouteName={HOMESCREEN.INDEX_SCREEN}>
      <HomeTab.Screen name={HOMESCREEN.INDEX_SCREEN} component={Home} options={() => ({
         tabBarLabel: ({ focused, color }) => runTabBarLabel('Home', focused, color),
         tabBarIcon: ({ focused, color }) => <HomeNavHomeIcon fill={focused ? COLORS.PRIMARY : color} />
      })} />
      <HomeTab.Screen name={HOMESCREEN.PLAN_SCREEN} component={PlanStack} options={() => ({
         tabBarLabel: ({ focused, color }) => runTabBarLabel('Plan', focused, color),
         tabBarIcon: ({ focused, color }) => <HomeNavPlanIcon fill={focused ? COLORS.PRIMARY : color} />
      })} />
      <HomeTab.Screen name={HOMESCREEN.WALLET_SCREEN} component={Wallet} options={() => ({
         tabBarLabel: ({ focused, color }) => runTabBarLabel('Wallet', focused, color),
         tabBarIcon: ({ focused, color }) => <HomeNavWalletIcon fill={focused ? COLORS.PRIMARY : color} />
      })} />
      <HomeTab.Screen name={HOMESCREEN.FEED_SCREEN} component={Feed} options={() => ({
         tabBarLabel: ({ focused, color }) => runTabBarLabel('Feed', focused, color),
         tabBarIcon: ({ focused, color }) => <HomeNavWalletIcon fill={focused ? COLORS.PRIMARY : color} />
      })} />
      <HomeTab.Screen name={HOMESCREEN.PROFILE_SCREEN} component={Profile} options={() => ({
         tabBarLabel: ({ focused, color }) => runTabBarLabel('Profile', focused, color),
         tabBarIcon: () => <AppCircle width={wp(6)} height={hp(3)} />
      })} />
   </HomeTab.Navigator>
)