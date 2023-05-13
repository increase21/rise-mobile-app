import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppText } from "../../components/app-text";
import { AppCircle, AppLayout } from "../../components/custom-ui";
import AppHeader from "../../components/app-header";
import AppCard, { AppSizeBox } from "../../components/app-card";
import { COLORS } from "../../constants/app-colors";
import useDimension from "../../helpers/app-dimension";
import { HomePlanImg1, HomePlanImg3, PlusIcon, QuestionMark } from "../../assets/svg";
import AppButton from "../../components/app-button";
import { PlanScreenProps } from "../../typings/navigations";
import { PLANSCREEN } from "../../constants/screens";
import { ComponentNavigation } from "../../typings/components";
const { hp, wp } = useDimension()

const NoCreatedPlan = ({ navigation }: ComponentNavigation) => (
   <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <AppCircle isButton height={hp(11)} width={wp(25)} onPress={() => navigation.navigate(PLANSCREEN.CREATE_PLAN)}>
         <PlusIcon strokeWidth={3} height={hp(10.3)} width={wp(10)} fill="transparent" />
      </AppCircle>
      <AppSizeBox marginBottom={hp(.3)} />
      <AppText color={COLORS.GRAY1}>No Active Plan</AppText>
   </View>
)

const CreatedPlan = (props: { imageSrc: React.ReactNode, title: string, amount: string, assetType: string }) => (
   <AppCard style={dStyle.activePlan} backgroundColor={COLORS.GRAY2}>
      {props.imageSrc}
      <View style={dStyle.actPlanContnt}>
         <AppText color={COLORS.WHITE}>{props.title}</AppText>
         <AppText color={COLORS.WHITE} fontSize={wp(1.5)}>{props.amount}</AppText>
         <AppText color={COLORS.WHITE}>{props.assetType}</AppText>
      </View>
   </AppCard>
)

export default ({ navigation }: PlanScreenProps<PLANSCREEN.INDEX_SCREEN>) => (
   <AppLayout sty>
      <AppHeader backIcon="close" title="Plan" />
      <AppSizeBox marginTop={hp(.2)} />
      <AppText textAlign="center" color={COLORS.GRAY1}>Tap on any of the plans to select</AppText>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
         <AppSizeBox paddingTop={hp(.7)} />
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: "wrap" }}>
            <CreatedPlan imageSrc={<HomePlanImg1 height={"100%"} />} title="Plan a wedding" amount="$2033.90" assetType="" />
            <CreatedPlan imageSrc={<HomePlanImg1 height={"100%"} />} title="Plan a wedding" amount="$2033.90" assetType="" />
            <CreatedPlan imageSrc={<HomePlanImg1 height={"100%"} />} title="Plan a wedding" amount="$2033.90" assetType="" />
         </View>

      </ScrollView> */}
      <NoCreatedPlan navigation={navigation} />
   </AppLayout>
)

const dStyle = StyleSheet.create({
   activePlan: {
      width: wp(42.5),
      overflow: 'hidden',
      alignItems: 'center',
      height: hp(30),
      marginBottom: hp(2)
   },
   actPlanContnt: {
      position: 'absolute', bottom: 0, left: 0,
      paddingHorizontal: wp(4), paddingVertical: hp(2.5)
   }
})