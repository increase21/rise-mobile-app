import React from "react";
import { AppLayout } from "../../components/custom-ui";
import AppHeader from "../../components/app-header";
import Modal from "react-native-modal"
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { AppSizeBox } from "../../components/app-card";
import useDimension from "../../helpers/app-dimension";
import { AppText } from "../../components/app-text";
import { COLORS } from "../../constants/app-colors";
import AppInput, { AppCustomInput } from "../../components/app-input";
import AppButton from "../../components/app-button";
import { CalenderIcon } from "../../assets/svg";
import { PlanScreenParamList, PlanScreenProps } from "../../typings/navigations";
import { PLANSCREEN } from "../../constants/screens";
import helpers from "../../helpers";
import AppProgressBar from "../../components/app-progress-bar";
import CalendarUI from "../auth/components/calendar-ui";
const { hp, wp } = useDimension()


const runPageContent = (stage: number): { headerTitle: string, contentTitle: string } => {
   return {
      headerTitle: stage === 1 ? 'Goal name' : stage === 2 ? 'Target amount' : 'Target date',
      contentTitle: stage === 1 ? 'What are you saving for' : stage === 2 ? 'How much do need?' : 'When do you want to withdraw?'
   }
}


export default ({ navigation }: PlanScreenProps<PLANSCREEN.CREATE_PLAN2>) => {

   const [planState, setPlanState] = React.useState({
      stage: 1, plan_name: '', amount: '', createdAt: '',
      focusActive: false, headerTitle: 'Goal name',
      openModal: false
   })
   const inputRef = React.useRef<any>(null)
   let planMinDate: any = new Date()
   planMinDate.setFullYear(planMinDate.getFullYear() + 1)
   planMinDate = planMinDate.toISOString().substring(0, 10)

   return (
      <AppLayout>
         <AppHeader title={planState.headerTitle} onBackPress={() => {
            if (planState.stage !== 1) {
               setPlanState({
                  ...planState, stage: planState.stage - 1,
                  headerTitle: runPageContent(planState.stage - 1).headerTitle,
               })
            }
         }}
         />
         <ScrollView showsVerticalScrollIndicator={false}>
            <AppSizeBox marginTop={hp(.5)} />
            <View>
               <AppText color={COLORS.GRAY1}>Question {planState.stage} of 3</AppText>
               <AppSizeBox marginTop={hp(.3)} />
               <AppProgressBar progress={planState.stage * 34} />
            </View>
            <AppSizeBox marginTop={hp(1)} />
            <AppText fontSize={wp(1)} bold>{runPageContent(planState.stage).contentTitle}</AppText>
            <AppSizeBox marginTop={hp(.2)} />
            <AppCustomInput keepOnFocus={planState.focusActive} viewProps={{ style: dStyle.inputHolda }}>
               {planState.stage == 2 && <AppText bold style={{ marginRight: wp(2) }}>{'₦'}</AppText>}
               {planState.stage !== 3 ?
                  <TextInput value={planState.stage === 1 ? planState.plan_name : planState.amount}
                     ref={inputRef} onFocus={() => setPlanState({ ...planState, focusActive: true })}
                     style={dStyle.iStyle} onChangeText={txt => {
                        if (planState.stage === 1) {
                           setPlanState({ ...planState, plan_name: txt })
                        } else {
                           setPlanState({ ...planState, amount: txt })
                        }
                     }} /> :
                  <React.Fragment>
                     <AppText bold>{planState.createdAt || 'Choose a date'}</AppText>
                     <TouchableOpacity onPress={() => setPlanState({ ...planState, openModal: true })}>
                        <CalenderIcon />
                     </TouchableOpacity>
                  </React.Fragment>
               }
            </AppCustomInput>
            <AppSizeBox marginTop={hp(.4)} />
            <AppButton onPress={() => {
               if (planState.stage === 1) {
                  //if there's no value
                  if (!planState.plan_name || planState.plan_name?.length < 3) {
                     return helpers.showToast(!planState.plan_name ? "Enter a name" : "Goal name too short")
                  }
               } else if (planState.stage === 2) {
                  if (!planState.amount || planState.amount?.length < 3) {
                     return helpers.showToast("Enter a valid amount")
                  }
               } else {
                  if (!planState.createdAt) {
                     return helpers.showToast("Select a date")
                  }
               }
               if (planState.stage < 3) {
                  setPlanState({ ...planState, stage: planState.stage + 1 })
                  inputRef?.current?.setNativeProps({ text: '' })
               } else {
                  helpers.navigateToScreen(navigation, PLANSCREEN.REVIEW_PLAN, planState)
               }
            }} >
               <AppText bold color={COLORS.WHITE} >Continue</AppText>
            </AppButton>
         </ScrollView>
         <Modal isVisible={planState.openModal} backdropOpacity={0.2} style={{ justifyContent: 'flex-end' }}>
            <CalendarUI startDate={planMinDate} minDate={planMinDate} numberOfYearsToRun={100} onSubmit={(date?: any) => {
               console.log("selected date", date)
               setPlanState({ ...planState, openModal: false, createdAt: date })
            }} onClose={() => setPlanState({ ...planState, openModal: false })} />
         </Modal>
      </AppLayout>

   )
}

const dStyle = StyleSheet.create({
   pWrapper: {
      width: '100%', borderRadius: 50, height: hp(1),
      backgroundColor: COLORS.GRAY2, overflow: 'hidden',
      flexDirection: 'row', alignItems: 'center'
   },
   pStage: {
      backgroundColor: COLORS.primary,
      width: '33.33%', height: '100%'
   },
   iStyle: {
      height: '100%', width: '100%',
      fontFamily: 'DMSans-Bold'
   },
   inputHolda: {
      borderWidth: 1.5, flexDirection: 'row',
      justifyContent: 'space-between', alignItems: 'center'
   }
})