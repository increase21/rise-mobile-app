import React from "react";
import { Image, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native'
import { COLORS } from "../../constants/app-colors";
import { AppText } from "../../components/app-text";
import useDimension from "../../helpers/app-dimension";
import AppInput from "../../components/app-input";
import AppButton from "../../components/app-button";
import { PasswordClose, PasswordOpen } from '../../assets/svg'
import { AppLayout } from "../../components/custom-ui";
import { AuthScreenProps } from "../../typings/navigations";
import { AUTHSCREENS, HOMESCREEN, ROOTSCREEN } from "../../constants/screens";
import AuthMethods from "./-auth-methods";
import helpers from "../../helpers";

const { wp, hp, height } = useDimension()


export default ({ navigation }: AuthScreenProps<AUTHSCREENS.SIGN_IN>) => {
   const [loginData, setLoginData] = React.useState({ email: '', password: '', seePass: false })
   const { processReqest, data, isLoading } = AuthMethods.loginAccount(navigation)
   return (
      <AppLayout style={{ backgroundColor: COLORS.WHITE, height: '100%' }}>
         <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
         <View style={{ marginTop: wp(28), }}>
            <AppText fontFamily="Tomato" fontSize={6} semiBold>Welcome back</AppText>
            <AppText style={{ color: COLORS.GRAY1, marginTop: hp(1.2) }}>Let’s get you logged in to get back to building your dollar-denominated investment portfolio.</AppText>
            <AppInput autoCapitalize="none" autoCorrect={false}
               label="Email address" autoComplete="email"
               onChangeText={txt => setLoginData({ ...loginData, email: txt })}
               viewProps={{ style: { marginTop: wp(10) } }} />
            <View>
               <AppInput style={{ paddingRight: wp(10) }} secureTextEntry={!loginData.seePass}
                  label="Password" autoCapitalize="none" autoCorrect={false}
                  onChangeText={txt => setLoginData({ ...loginData, password: txt })}
                  viewProps={{ style: { marginVertical: hp(2) } }} />

               <TouchableOpacity onPress={() => setLoginData({ ...loginData, seePass: !loginData.seePass })}
                  style={{ position: 'absolute', right: 0, top: 0, marginRight: 11, marginTop: hp(4.5) }}>
                  {loginData.seePass ? <PasswordOpen /> : <PasswordClose />}
               </TouchableOpacity>

            </View>
            <AppButton isLoading={isLoading} onPress={() => processReqest(loginData)}>
               <AppText bold color={COLORS.WHITE}>
                  Sign In
               </AppText>
            </AppButton>

            <View style={{ marginTop: hp(4) }}>
               <AppText bold color={COLORS.PRIMARY} textAlign="center">I forgot my password</AppText>
               <TouchableOpacity onPress={() => helpers.navigateToScreen(navigation, AUTHSCREENS.ACCOUNT_INFO)}
                  style={{ marginTop: hp(27) }}>
                  <AppText color={COLORS.GRAY1} bold textAlign="center">Don't have an account? <AppText color={COLORS.PRIMARY}> Sign up</AppText></AppText>
               </TouchableOpacity>
            </View>
         </View>
      </AppLayout >
   )
}