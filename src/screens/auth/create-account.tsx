import React from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS } from "../../constants/app-colors";
import { AppText } from "../../components/app-text";
import useDimension from "../../helpers/app-dimension";
import AppInput from "../../components/app-input";
import AppButton from "../../components/app-button";
import { PasswordClose, PasswordOpen } from '../../assets/svg'
import { AppLayout } from "../../components/custom-ui";
import { TickRight } from "../../assets/svg/tick-right";
import { AuthStackParamList } from "../../typings/navigations";
import { AUTHSCREENS, ROOTSCREEN } from "../../constants/screens";
import { AuthScreenProps } from "../../typings/navigations";
import AuthMethods from "./-auth-methods";
import SuccessPage from "../../components/success-page";
import helpers from "../../helpers";
import { globalData } from "../../store";
const { wp, hp, height } = useDimension()

interface XterIndicator {
   hasUpper?: boolean | any,
   hasSpecialXter?: boolean | any,
   hasMinimum?: boolean | any
}

const XterIndicator = (props?: XterIndicator) => (
   <View>
      <View style={dStyles.xRow}>
         <View style={[dStyles.xRowChild, props?.hasMinimum && { backgroundColor: COLORS.primary }]}>
            {props?.hasMinimum && <TickRight width={9} stroke={COLORS.WHITE} />}
         </View>
         <AppText>Minimum of 8 characters</AppText>
      </View>
      <View style={dStyles.xRow}>
         <View style={[dStyles.xRowChild, { marginVertical: 15 }, props?.hasUpper && { backgroundColor: COLORS.primary }]}>
            {props?.hasUpper && <TickRight width={9} stroke={COLORS.WHITE} />}
         </View>
         <AppText>One UPPERCASE character</AppText>
      </View>
      <View style={dStyles.xRow}>
         <View style={[dStyles.xRowChild, props?.hasSpecialXter && { backgroundColor: COLORS.primary }]}>
            {props?.hasSpecialXter && <TickRight width={9} stroke={COLORS.WHITE} />}
         </View>
         <AppText>One unique character (e.g: !@#$%^&*?)</AppText>
      </View>
   </View>
)

const checkXterExist = (props = { type: '', value: '' }): Boolean => {
   if (props?.type === "8") {
      return props?.value?.length >= 8
   } else if (props?.type === "uppercase") {
      return /[A-Z]/.test(props?.value)
   } else {
      return /[\!\@\#\$\%\^\&\*\?]/.test(props?.value)
   }
}

export default ({ navigation, route }: AuthScreenProps<AUTHSCREENS.CRAETE_ACCOUNT>) => {
   const accountData: any = globalData.userData

   const [xterCheck, setXterCheck] = React.useState({
      showPass: false, email: '', password: '', nickName: '', showSuccess: false
   })
   const { processReqest, isLoading } = AuthMethods.createAccount(navigation, setXterCheck)
   let prevData = React.useRef<object | any>(route.params)

   let hasMinimum = checkXterExist({ type: '8', value: xterCheck.password })
   let hasSpecialXter = checkXterExist({ type: '', value: xterCheck.password })
   let hasUpper = checkXterExist({ type: 'uppercase', value: xterCheck.password })

   return (
      <React.Fragment>
         <AppLayout style={{ backgroundColor: COLORS.WHITE, height: '100%' }}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
            <View style={{ marginTop: wp(25), }}>
               <AppText fontSize={5}>Create an account</AppText>
               <AppText style={{ color: COLORS.GRAY1, marginTop: 11 }}>Start building your dollar-denominated investment portfolio</AppText>

               <AppInput autoCorrect={false} autoComplete="email"
                  autoCapitalize="none" textContentType="emailAddress"
                  keyboardType="email-address" label="Email address"
                  viewProps={{ style: { marginTop: wp(10) } }}
                  onChangeText={txt => setXterCheck({ ...xterCheck, email: txt })} />
               <View>
                  <AppInput autoCorrect={false} textContentType="password" secureTextEntry={!xterCheck.showPass}
                     style={{ paddingRight: wp(10), maxWidth: '90%' }} label="Password"
                     onChangeText={txt => setXterCheck({ ...xterCheck, password: txt })}
                     viewProps={{ style: { marginVertical: wp(4) } }} />
                  <TouchableOpacity onPress={() => setXterCheck({ ...xterCheck, showPass: !xterCheck.showPass })}
                     style={{ position: 'absolute', right: 0, top: 0, marginRight: wp(3), marginTop: wp(10) }}>
                     {xterCheck.showPass ? <PasswordClose /> : <PasswordOpen />}
                  </TouchableOpacity>
               </View>

               <XterIndicator hasMinimum={hasMinimum} hasSpecialXter={hasSpecialXter} hasUpper={hasUpper} />
               <AppButton isLoading={isLoading} onPress={() => processReqest({ ...prevData.current, ...xterCheck })}
                  style={{ marginTop: 20 }} disabled={(!hasMinimum || !hasSpecialXter || !hasUpper || xterCheck.email.length === 0)}>
                  <AppText color={COLORS.WHITE} style={{ fontWeight: '700' }} >Sign In</AppText>
               </AppButton>
            </View>
         </AppLayout >
         {xterCheck.showSuccess &&
            <SuccessPage title={"You just created your\nRise account"} comment={"Welcome to Rise, let’s take\nyou home"}
               onPress={() => {
                  //if the login has been successful
                  if (accountData && accountData.token) {
                     helpers.resetNavigation(navigation, AUTHSCREENS.SET_PIN)
                  } else {
                     helpers.resetNavigation(navigation, AUTHSCREENS.SIGN_IN)
                  }
               }} />
         }
      </React.Fragment>
   )
}




const dStyles = StyleSheet.create({
   xRowChild: {
      borderRadius: 50, height: 15,
      width: 15, backgroundColor: COLORS.WHITE,
      borderWidth: 1, borderColor: COLORS.primary,
      marginRight: 10, justifyContent: 'center', alignItems: 'center'
   },
   xRow: {
      flexDirection: 'row',
      alignItems: 'center'
   }
})