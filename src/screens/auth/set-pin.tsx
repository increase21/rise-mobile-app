import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { COLORS } from "../../constants/app-colors";
import AppHeader from "../../components/app-header";
import { AppKeyBoard, AppLayout } from "../../components/custom-ui";
import { AppText } from "../../components/app-text";
import OtpScreen from "./components/otp-screen";
import useDimension from "../../helpers/app-dimension";
import { ComponentNavigation } from "../../typings/components";
import helpers from "../../helpers";
import { ROOTSCREEN } from "../../constants/screens";
const { hp } = useDimension()

export default ({ navigation }: ComponentNavigation) => {
   const [value, setValue] = React.useState<string>('');
   return (
      <AppLayout>
         <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
         <AppHeader title="Set Pin" />
         <AppText fontSize={4.3} style={{ marginTop: 20 }}>Create a 6-digit PIN</AppText>
         <AppText color={COLORS.GRAY1} style={{ marginTop: 8 }}>You’ll use this PIN to sign in and confirm transactions</AppText>
         <OtpScreen value={value} />
         <AppKeyBoard onPress={(res?: any) => {
            setValue(res === "x" ? value.slice(0, -1) : value.length < 6 ? value + res : value)
            //if the leng is more than 6
            if (value.length >= 5) {
               helpers.resetNavigation(navigation, ROOTSCREEN.HOME_SCREEN)
            }
         }}
            style={{ marginTop: hp(10) }} />
      </AppLayout>
   )
}