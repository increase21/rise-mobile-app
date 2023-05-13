import React from "react";
import { HomeGradient } from "../../../assets/svg/home-gradient";
import { ImageBackground, View } from "react-native";
import { AppText } from "../../../components/app-text";
import useDimension from "../../../helpers/app-dimension";
import { NotificationBell, PasswordClose } from "../../../assets/svg";
import AppCard from "../../../components/app-card";
const { wp, hp } = useDimension()


const BalanceUI = () => {


   return (
      <AppCard>
         <View>
            <AppText>Total Balance</AppText>
            <PasswordClose />
         </View>
         <View>
            <AppText>$0.00</AppText>
         </View>
      </AppCard>
   )

}

