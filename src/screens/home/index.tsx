import React from "react";
// import { HomeGradient } from "../../assets/svg/home-gradient";
import { ImageBackground, Platform, ScrollView, View } from "react-native";
import { AppText } from "../../components/app-text";
import useDimension from "../../helpers/app-dimension";
import { AppLogoGray, NotificationBell, PlusIcon } from "../../assets/svg";
import { AppIndicatorLoader, AppLayout } from "../../components/custom-ui";
import { COLORS } from "../../constants/app-colors";
import { MetaUI, BalanceUI } from "./components/meta-ui";
import { PlanHelp, PlanUI } from "./components/plan-ui";
import { AppSizeBox } from "../../components/app-card";
import { TodayQuote } from "./components/today-quote";
import { HomeGradients } from "./components/home-gradients";
import AppButton from "../../components/app-button";
import { globalData } from "../../store";
import PlanMethods from "../plan/-plan-methods";
import { HometabScreenProps } from "../../typings/navigations";
import { HOMESCREEN } from "../../constants/screens";
import AuthMethods from "../auth/-auth-methods";



export default ({ navigation }: HometabScreenProps<HOMESCREEN.INDEX_SCREEN>) => {
   const userData: any = globalData.userData
   const { isLoading, data } = PlanMethods.getPlan("plan-home-index", true)

   if (!userData || !userData.token) {
      return <AppIndicatorLoader />
   }

   return (
      <React.Fragment>
         <ScrollView contentContainerStyle={{ backgroundColor: '#fcfcfc' }} showsVerticalScrollIndicator={false}>
            <HomeGradients>
               <AppSizeBox marginTop={Platform.OS === "ios" ? 6 : 2} />
               <MetaUI name={userData?.first_name} bellCount={1} dayHour={new Date().getHours()} />
               <AppSizeBox marginTop={1} />
               <BalanceUI totalBalance={userData?.total_balance} navigation={navigation} />
            </HomeGradients>
            <AppLayout safeAreaView={false}>
               <AppSizeBox marginVertical={1.5} />
               <PlanUI data={data?.data} isLoading={isLoading} navigation={navigation} />
               <AppSizeBox marginVertical={1.5} />
               <PlanHelp />
               <AppSizeBox marginVertical={1.5} />
               <TodayQuote />
               <AppSizeBox marginVertical={1.5} />
               <AppLogoGray style={{ marginLeft: 'auto', marginRight: 'auto' }} />
               <AppSizeBox marginVertical={2} />
            </AppLayout>
         </ScrollView>
      </React.Fragment>
   )
}