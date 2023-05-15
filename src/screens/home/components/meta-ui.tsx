import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../../../components/app-text";
import useDimension from "../../../helpers/app-dimension";
import { ArrowCurve, LeftArrow, NotificationBell, PasswordClose, PlusIcon } from "../../../assets/svg";
import { COLORS } from "../../../constants/app-colors";
import AppCard from "../../../components/app-card";
import DotIndicator from "../../../components/app-dot-indicator";
import AppButton from "../../../components/app-button";
import { AppCircle } from "../../../components/custom-ui";
import { TotalBalanceGradient } from "./home-gradients";
import helpers from "../../../helpers";
import { HOMESCREEN } from "../../../constants/screens";
const { wp, hp } = useDimension()


export const MetaUI = (props: { name: string, bellCount: number, dayHour: number }) => (
   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
         <AppText>{props.dayHour > 16 ? 'Good evening' : props.dayHour > 11 ? 'Good afternoon' : ' Good morning'} ☀️</AppText>
         <AppText fontFamily="DMSans" fontSize={5}>{props.name}</AppText>
      </View>
      <View style={dStyle.meta2block}>
         <View style={dStyle.earn30}>
            <AppText color={COLORS.WHITE}>Earn 3% bonus</AppText>
         </View>
         <View style={{ position: 'relative', marginRight: wp(2) }}>
            <NotificationBell />
            {props.bellCount > 0 &&
               <AppCircle width={wp(4.5)} height={hp(2)} style={dStyle.bellRed}>
                  <AppText bold fontFamily="Tomato" fontSize={wp(.7)} color={COLORS.WHITE}>{props.bellCount}{props.bellCount > 9 && '+'}</AppText>
               </AppCircle>
            }
         </View>
      </View>
   </View>
)

export const BalanceUI = (props: { totalBalance: number, navigation: any }) => (
   <React.Fragment>
      <AppCard style={{ borderColor: COLORS.WHITE, overflow: 'hidden' }}>
         <TotalBalanceGradient>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
               <AppText color={COLORS.GRAY1} style={{ marginRight: wp(2.7) }}>Total Balance</AppText>
               <PasswordClose width={wp(4)} />
            </View>
            <View style={{ width: wp(44), paddingVertical: hp(1.4), borderBottomWidth: 1, borderBottomColor: COLORS.GRAY2 }}>
               <AppText fontSize={wp(2)} textAlign="center">${props.totalBalance}</AppText>
            </View>
            <View style={{ paddingVertical: hp(1.4), flexDirection: 'row', alignItems: 'center' }}>
               <AppText style={{ marginRight: wp(1) }}>Total Grains</AppText>
               <LeftArrow strokeWidth={1} width={12} style={{ transform: [{ rotate: '145deg' }] }} />
               <AppText semiBold color={COLORS.GREEN} fontFamily="Tomato" style={{ marginHorizontal: wp(1) }}>0.20</AppText>
               <ArrowCurve strokeWidth={1} width={12} style={{ transform: [{ rotate: '-90deg' }] }} />
            </View>
            <DotIndicator stage={1} activeDotStyle={{ width: hp(1.5), backgroundColor: COLORS.primary }} dotStyle={{ marginHorizontal: wp(1) }} />
         </TotalBalanceGradient>
      </AppCard>
      <AppButton backgroundColor={COLORS.WHITE} style={{
         borderWidth: 1, marginTop: hp(2.5),
         borderColor: COLORS.GRAY2, height: hp(6.4)
      }} onPress={() => helpers.navigateToScreen(props.navigation, HOMESCREEN.WALLET_SCREEN, { fundPlan: true })}>
         <PlusIcon />
         <AppText bold style={{ marginLeft: 9 }}>Add money</AppText>
      </AppButton>
   </React.Fragment>
)


const dStyle = StyleSheet.create({
   bellRed: {
      backgroundColor: COLORS.RED, marginTop: hp(-1),
      position: 'absolute', top: 0, right: 0, marginRight: wp(-2)
   },
   earn30: {
      width: wp(30), height: hp(4),
      backgroundColor: COLORS.primary,
      borderRadius: wp(5), justifyContent: 'center',
      alignItems: 'center',
   },
   meta2block: {
      flexDirection: 'row',
      width: '45%',
      justifyContent: 'space-between',
      alignItems: 'center'
   }
})