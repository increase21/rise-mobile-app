import React from "react";
import { AppLayout } from "../../components/custom-ui";
import AppHeader from "../../components/app-header";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { AppSizeBox } from "../../components/app-card";
import useDimension from "../../helpers/app-dimension";
import { AppText } from "../../components/app-text";
import { COLORS } from "../../constants/app-colors";
import AppInput, { AppCustomInput } from "../../components/app-input";
import AppButton from "../../components/app-button";
import { CalenderIcon } from "../../assets/svg";
const { hp, wp } = useDimension()


const ProgressBar = (props: { stage: number }) => (
   <View>
      <AppText color={COLORS.GRAY1}>Question {props?.stage} of 3</AppText>
      <AppSizeBox marginTop={hp(.3)} />
      <View style={dStyle.pWrapper}>
         <View style={dStyle.pStage}></View>
         {props.stage >= 2 && <View style={dStyle.pStage}></View>}
         {props.stage >= 3 && <View style={dStyle.pStage}></View>}
      </View>
   </View>
)

const runPageContent = (stage: number): { headerTitle: string, contentTitle: string } => {
   return {
      headerTitle: stage === 1 ? 'Goal name' : stage === 2 ? 'Target amount' : 'Target date',
      contentTitle: stage === 1 ? 'What are you saving for' : stage === 2 ? 'How much do need?' : 'When do you want to withdraw?'
   }
}


export default () => {

   const [planState, setPlanState] = React.useState<any>({
      stage: 1, title: '', amount: '', createdAt: '',
      focusActive: false, headerTitle: 'Goal name'
   })
   const inputRef = React.useRef<any>(null)
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
            <ProgressBar stage={planState.stage} />
            <AppSizeBox marginTop={hp(1)} />
            <AppText fontSize={wp(1)} bold>{runPageContent(planState.stage).contentTitle}</AppText>
            <AppSizeBox marginTop={hp(.2)} />
            <AppCustomInput keepOnFocus={planState.focusActive} viewProps={{ style: dStyle.inputHolda }}>
               {planState.stage == 2 && <AppText bold style={{ marginRight: wp(2) }}>{'₦'}</AppText>}
               {planState.stage !== 3 ?
                  <TextInput value={planState.stage === 1 ? planState.title : planState.amount}
                     ref={inputRef} onFocus={() => setPlanState({ ...planState, focusActive: true })}
                     style={dStyle.iStyle} onChangeText={txt => {
                        if (planState.stage === 1) {
                           setPlanState({ ...planState, title: txt })
                        } else {
                           setPlanState({ ...planState, amount: txt })
                        }
                     }} /> :
                  <React.Fragment>
                     <AppText bold>Choose a date</AppText>
                     <CalenderIcon />
                  </React.Fragment>
               }
            </AppCustomInput>
            <AppSizeBox marginTop={hp(.4)} />
            <AppButton onPress={() => {
               if (planState.stage < 3) {
                  setPlanState({ ...planState, stage: planState.stage + 1 })
                  inputRef?.current?.setNativeProps({ text: '' })
               }
            }} >
               <AppText bold color={COLORS.WHITE} >Continue</AppText>
            </AppButton>
         </ScrollView>
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