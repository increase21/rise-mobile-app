import React from "react";
import { View } from "react-native-animatable";
import { AppText } from "../../../components/app-text";
import { PlusIcon, QuestionMark } from "../../../assets/svg";
import { AppCircle } from "../../../components/custom-ui";
import { AC_JC, FR_AC_JSB, FR_JC_AC } from "../../../constants/global-style";
import useDimension from "../../../helpers/app-dimension";
import { COLORS } from "../../../constants/app-colors";
import AppCard, { AppSizeBox } from "../../../components/app-card";
import AppProgressBar from "../../../components/app-progress-bar";
import AppButton from "../../../components/app-button";
import { HOMESCREEN } from "../../../constants/screens";
import helpers from "../../../helpers";
const { wp, hp } = useDimension()

export type DataPropsObject = {
   invested_amount: number;
   target_amount: number;
   total_returns: string;
   total_invested: string;
   maturity_date: string;
}

interface PlanBalanceProps {
   data: DataPropsObject;
   navigation: any
}

export const OverviewPlanBalance = ({ data, navigation }: PlanBalanceProps) => {
   let proNum = ((data.invested_amount / data.target_amount) * 100).toFixed(2)
   return (
      <View style={AC_JC}>
         <AppText>Plan Balance</AppText>
         <AppText bold fontFamily="Tomato" fontSize={7}>${data.invested_amount}</AppText>
         <View style={FR_JC_AC}>
            <AppText color={COLORS.GRAY1}>~{'₦' + data.total_returns}</AppText>
            <AppCircle height={10} width={10} backgroundColor={COLORS.GRAY1} style={{ marginLeft: 4 }}>
               <QuestionMark width={7} height={7} stroke={COLORS.WHITE} fill={COLORS.WHITE} />
            </AppCircle>
         </View>
         <AppSizeBox marginTop={hp(.15)} />
         <View style={AC_JC}>
            <AppText>Gains</AppText>
            <AppText fontFamily="Tomato"
               color={COLORS.GREEN}>+$5,000.43 • +12.4%</AppText>
         </View>
         <AppSizeBox marginTop={hp(.15)} />
         <View style={[FR_AC_JSB, { width: '100%' }]}>
            <AppText>{proNum} achieved</AppText>
            <AppText>Target: ${parseFloat(String(data.target_amount)).toLocaleString()}</AppText>
         </View>
         <AppSizeBox marginTop={hp(.15)} />
         <AppProgressBar progress={parseInt(proNum)} />
         <AppSizeBox marginTop={hp(.4)} />

         <AppCard width="60%" marginLeft="auto" marginRight="auto"
            backgroundColor={'rgba(113, 135, 156, 0.1)'} padding={wp(.3)} style={{ borderRadius: 50 }}>
            <AppText textAlign="center" color={COLORS.GRAY1}>Results are updated monthly</AppText>
         </AppCard>
         <AppSizeBox marginTop={hp(.4)} />
         <AppButton backgroundColor={'rgba(113, 135, 156, 0.1)'} onPress={() => helpers.navigateToScreen(navigation, HOMESCREEN.WALLET_SCREEN, { fundPlan: true })}>
            <PlusIcon fill="transparent" stroke={COLORS.PRIMARY} strokeWidth={2} />
            <AppText bold color={COLORS.PRIMARY} style={{ marginLeft: 6 }}>Fund plan</AppText>
         </AppButton>
      </View>
   )
}

export const OverViewPlanMetaData = (props: { title: string, comment: string }) => (
   <View style={[FR_AC_JSB, {
      borderBottomWidth: 1, borderBottomColor: COLORS.GRAY2,
      paddingVertical: hp(1)
   }]}>
      <AppText color={COLORS.GRAY1}>{props.title}</AppText>
      <AppText fontFamily="Tomato">{props.comment}</AppText>
   </View>
)