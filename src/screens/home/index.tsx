import React from "react";
// import { HomeGradient } from "../../assets/svg/home-gradient";
import { ImageBackground, Platform, ScrollView, View } from "react-native";
import { AppText } from "../../components/app-text";
import useDimension from "../../helpers/app-dimension";
import { AppLogoGray, NotificationBell, PlusIcon } from "../../assets/svg";
import { AppLayout } from "../../components/custom-ui";
import { COLORS } from "../../constants/app-colors";
import { MetaUI, BalanceUI } from "./components/meta-ui";
import { PlanHelp, PlanUI } from "./components/plan-ui";
import { AppSizeBox } from "../../components/app-card";
import { TodayQuote } from "./components/today-quote";
import { HomeGradients } from "./components/home-gradients";
import AppButton from "../../components/app-button";
const { wp, hp, width } = useDimension()

export default () => {


   return (
      <React.Fragment>
         <ScrollView contentContainerStyle={{ backgroundColor: '#fcfcfc' }} showsVerticalScrollIndicator={false}>
            <HomeGradients>
               <AppSizeBox marginTop={Platform.OS === "ios" ? 6 : 2} />
               <MetaUI />
               <AppSizeBox marginTop={1} />
               <BalanceUI />
            </HomeGradients>
            <AppLayout safeAreaView={false}>
               <AppSizeBox marginVertical={1.5} />
               <PlanUI />
               <AppSizeBox marginVertical={1.5} />
               <PlanHelp />
               <AppSizeBox marginVertical={1.5} />
               <TodayQuote />
               <AppSizeBox marginVertical={1.5} />
               <AppLogoGray style={{ marginLeft: 'auto', marginRight: 'auto' }} />
               <AppSizeBox marginVertical={2} />
            </AppLayout>
         </ScrollView>
         {/* </AppLayout> */}
      </React.Fragment>
   )
}