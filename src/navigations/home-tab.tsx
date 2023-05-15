import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HometabParamList } from "../typings/navigations";
import { HOMESCREEN } from "../constants/screens";
import Home from "../screens/home";
import Wallet from "../screens/wallet";
import Feed from "../screens/feed";
import Profile from "../screens/profile";
import { HomeNavHomeIcon, HomeNavPlanIcon, HomeNavWalletIcon } from "../assets/svg";
import { AppCircle, BellRedIndicator } from "../components/custom-ui";
import useDimension from "../helpers/app-dimension";
import { COLORS } from "../constants/app-colors";
import { AppText } from "../components/app-text";
import PlanStack from "./plan-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Image, View } from "react-native";
import { ProfileImage } from "../assets/images";
const { wp, hp } = useDimension()
const HomeTab = createBottomTabNavigator<HometabParamList>()


const invisibleTabs = [
   HOMESCREEN.INDEX_SCREEN, HOMESCREEN.FEED_SCREEN,
   HOMESCREEN.PLAN_SCREEN, HOMESCREEN.PROFILE_SCREEN,
   HOMESCREEN.INDEX_SCREEN
]
//use in making tab bar not visible
const isTabBarVisible = (name?: string | undefined) => {
   return name ? false : true
};

const runTabBarLabel = (label?: any, focused?: boolean, color?: string) => (
   focused ? <AppCircle width={wp(2.5)} height={hp(1.2)} style={{ backgroundColor: COLORS.PRIMARY }} /> :
      <AppText color={focused ? COLORS.PRIMARY : color} fontSize={3.5}>{label}</AppText>
)

export default () => (
   <HomeTab.Navigator initialRouteName={HOMESCREEN.INDEX_SCREEN} screenOptions={({ route }) => ({
      tabBarVisible: isTabBarVisible(getFocusedRouteNameFromRoute(route))

   })}>
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
         tabBarIcon: ({ focused, color }) => (
            <View>
               <HomeNavWalletIcon fill={focused ? COLORS.PRIMARY : color} />
               <BellRedIndicator bellCount={10} />
            </View>
         )
      })} />
      <HomeTab.Screen name={HOMESCREEN.PROFILE_SCREEN} component={Profile} options={() => ({
         tabBarLabel: ({ focused, color }) => runTabBarLabel('Profile', focused, color),
         tabBarIcon: () => <Image source={ProfileImage} style={{ width: wp(6), height: hp(3) }} />
      })} />
   </HomeTab.Navigator>
)