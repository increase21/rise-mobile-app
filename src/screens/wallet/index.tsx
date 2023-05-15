import React from "react";
import SuccessPage from "../../components/success-page";
import { HometabScreenProps } from "../../typings/navigations";
import { HOMESCREEN } from "../../constants/screens";
import helpers from "../../helpers";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { AppCircle, AppLayout } from "../../components/custom-ui";
import { AppText } from "../../components/app-text";
import { COLORS } from "../../constants/app-colors";
import useDimension from "../../helpers/app-dimension";
import AppHeader from "../../components/app-header";
import AppCard, { AppSizeBox } from "../../components/app-card";
import { FR_AC, FR_AC_JSB, FR_JC_AC, FR_JSB } from "../../constants/global-style";
import { ScreenData } from "./mockData";
import Modal from 'react-native-modal'
import { XIcon } from "../../assets/svg";
import AppButton from "../../components/app-button";
import { useIsFocused } from "@react-navigation/core";
const { wp, hp, width } = useDimension()



interface PlanInfoRowProps {
   data: any;
   Img: any
}

const PlanInfoRow = ({ data, Img }: PlanInfoRowProps) => (
   <View style={dStyle.dRow}>
      <View style={FR_AC}>
         <AppCircle style={{ marginRight: wp(6) }}>
            {<Img />}
         </AppCircle>
         <View>
            <AppText>{data?.title}</AppText>
            <AppText color={COLORS.GRAY1} fontSize={wp(.9)}>
               {data?.description}
            </AppText>
         </View>
      </View>
      <View>
         <AppText >Rate - {data?.rate}</AppText>
         <AppText color={COLORS.GRAY1} fontSize={wp(.9)}>
            Fee - {data?.fee}
         </AppText>
      </View>
   </View>
)

export default ({ navigation, route }: HometabScreenProps<HOMESCREEN.FEED_SCREEN>) => {
   const [wState, setWState] = React.useState({ openModal: false })
   let param: any = route.params
   let mounted = useIsFocused()
   React.useEffect(() => {
      if (param?.fundPlan === true) {
         setWState({ ...wState, openModal: true })
      }
   }, [mounted])
   return (
      <React.Fragment>
         <AppLayout>
            <StatusBar backgroundColor={COLORS.WHITE} translucent={false} barStyle="dark-content" />
            <AppHeader title="Fund Wallet" backIcon="close" />
            <AppSizeBox marginTop={hp(.2)} />
            <AppCard backgroundColor={COLORS.PRIMARY} paddingVertical={hp(1)}
               justifyContent="center" alignItems="center">
               <AppText bold color={COLORS.WHITE}>Balance</AppText>
               <AppSizeBox marginTop={hp(.2)} />
               <AppText color={COLORS.WHITE} bold fontFamily="Tomato" fontSize={wp(1.6)}>${0.00}</AppText>
            </AppCard>
            <AppSizeBox marginTop={hp(.7)} />
            <View style={{ flex: 1 }}>
               <AppText>Transactions</AppText>
               <ScrollView showsVerticalScrollIndicator={false}>
                  <AppSizeBox marginTop={hp(.2)} />
                  {ScreenData.map((item, index) => <PlanInfoRow data={item} Img={item.img} key={index} />)}
               </ScrollView>
            </View>
         </AppLayout>
         <Modal isVisible={wState.openModal} style={{ width: '100%', left: 0, marginLeft: wp(-.3) }}
            onBackdropPress={() => setWState({ ...wState, openModal: false })}
            onBackButtonPress={() => setWState({ ...wState, openModal: false })}>
            <View style={dStyle.rateRow}>
               <View style={[FR_AC, dStyle.rroww, { borderRadius: 10 }]}>
                  <AppCircle style={{ marginRight: wp(7) }}>
                     <XIcon />
                  </AppCircle>
                  <AppText fontSize={wp(1.3)} fontFamily="Tomato">About Exchange Rates</AppText>
               </View>
               <View style={[FR_AC_JSB, dStyle.rroww]}>
                  <View>
                     <AppText fontSize={wp(1)}>USD Buy Rate</AppText>
                     <AppText style={{ marginTop: 4 }} color={COLORS.GRAY1}>We buy US dollars at this rate</AppText>
                  </View>
                  <AppText>₦490</AppText>
               </View>
               <View style={[FR_AC_JSB, dStyle.rroww]}>
                  <View>
                     <AppText fontSize={wp(1)}>USD Sell Rate</AppText>
                     <AppText style={{ marginTop: 4 }} color={COLORS.GRAY1}>The current value of your investments in Naira</AppText>
                  </View>
                  <AppText>₦490</AppText>
               </View>
               <AppSizeBox marginTop={hp(.3)} />
               <AppText fontSize={wp(.7)} color={COLORS.GRAY3} textAlign="center">These exhange rates are provided by independent third parties who handle fund conversions at the prevailing parallel rates and are not set, or controlled or by Rise. They are subject to change based on market trends.</AppText>
               <AppSizeBox marginTop={hp(.5)} />
               <AppButton>
                  <AppText color={COLORS.WHITE}>Accept & Continue</AppText>
               </AppButton>
            </View>
         </Modal>
      </React.Fragment>
   )
}


const dStyle = StyleSheet.create({
   dRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: hp(4)
   },
   rroww: {
      paddingVertical: hp(2),
      borderBottomWidth: 1, borderBottomColor: COLORS.GRAY2
   },
   rateRow: {
      position: 'absolute',
      width: '100%', bottom: 0,
      backgroundColor: COLORS.WHITE,
      padding: 15, borderRadius: 15
   }
})