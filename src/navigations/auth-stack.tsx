import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { AUTHSCREENS } from "../constants/screens";
import signIn from "../screens/auth/sign-in";
import setPin from "../screens/auth/set-pin";
import setPinConfirm from "../screens/auth/set-pin-confirm";
import signUpStory from "../screens/auth/sign-up-story";
import createAccount from "../screens/auth/create-account";
import accountInfo from "../screens/auth/account-info";
import { AuthStackParamList } from "../typings/navigations";
import SplashScreen from "../screens/auth/splash-screen";


const AuthStack = createStackNavigator<AuthStackParamList>()

export default () => (
   <AuthStack.Navigator initialRouteName={AUTHSCREENS.SPLASH_SCREEN} screenOptions={{ headerShown: false }}  >
      <AuthStack.Screen name={AUTHSCREENS.SIGN_IN} component={signIn} />
      <AuthStack.Screen name={AUTHSCREENS.SET_PIN} component={setPin} />
      <AuthStack.Screen name={AUTHSCREENS.SET_PIN_CONFIRM} component={setPinConfirm} />
      <AuthStack.Screen name={AUTHSCREENS.SIGN_UP_STORY} component={signUpStory} />
      <AuthStack.Screen name={AUTHSCREENS.CRAETE_ACCOUNT} component={createAccount} />
      <AuthStack.Screen name={AUTHSCREENS.ACCOUNT_INFO} component={accountInfo} />
      <AuthStack.Screen name={AUTHSCREENS.SPLASH_SCREEN} component={SplashScreen} />
   </AuthStack.Navigator>
)