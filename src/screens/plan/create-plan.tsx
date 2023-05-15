import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppText } from "../../components/app-text";
import { AppCircle, AppLayout } from "../../components/custom-ui";
import AppHeader from "../../components/app-header";
import { AppSizeBox } from "../../components/app-card";
import { COLORS } from "../../constants/app-colors";
import useDimension from "../../helpers/app-dimension";
import { HomePlanImg3, QuestionMark } from "../../assets/svg";
import AppButton from "../../components/app-button";
import { PlanScreenProps } from "../../typings/navigations";
import { PLANSCREEN } from "../../constants/screens";
import helpers from "../../helpers";
const { hp, wp } = useDimension()

interface PlanInfoRowProps {
   imgSrc: React.ReactNode;
   title: string;
   description: string
}

const PlanInfoRow = (props: PlanInfoRowProps) => (
   <View style={dStyle.dRow}>
      <AppCircle style={{ marginRight: wp(6) }}>
         {props.imgSrc}
      </AppCircle>
      <View style={{ flex: 1 }}>
         <AppText bold>{props.title}</AppText>
         <AppText color={COLORS.GRAY1} fontSize={wp(.9)}>
            {props.description}
         </AppText>
      </View>
   </View>
)

export default ({ navigation }: PlanScreenProps<PLANSCREEN.CREATE_PLAN>) => (
   <AppLayout>
      <AppHeader backIcon="close" title="Create plan" />
      <ScrollView showsVerticalScrollIndicator={false}>
         <AppSizeBox marginTop={hp(.3)} />
         <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <AppText color={COLORS.GRAY1}>Reach your goals faster</AppText>
            <AppSizeBox marginTop={hp(.8)} />
            <HomePlanImg3 />
            <AppSizeBox marginTop={hp(.7)} />
         </View>
         <PlanInfoRow imgSrc={<QuestionMark />} title="Give us a few details" description="Tell us what you want to achieve and we will help you get there" />
         <PlanInfoRow imgSrc={<QuestionMark />} title="Turn on auto-invest" description="The easiest way to get your investment working for you is to fund to periodically." />
         <PlanInfoRow imgSrc={<QuestionMark />} title="Modify as you progress" description="You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more." />
         <AppSizeBox marginTop={hp(.7)} />
         <AppButton onPress={() => helpers.navigateToScreen(navigation, PLANSCREEN.CREATE_PLAN2)}>
            <AppText color={COLORS.WHITE} bold>Continue</AppText>
         </AppButton>
      </ScrollView>
   </AppLayout>
)

const dStyle = StyleSheet.create({
   dRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: hp(4)
   }
})