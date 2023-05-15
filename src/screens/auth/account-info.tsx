import React from "react";
import Modal from "react-native-modal";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS } from "../../constants/app-colors";
import { AppText } from "../../components/app-text";
import useDimension from "../../helpers/app-dimension";
import AppInput, { AppCustomInput } from "../../components/app-input";
import AppButton from "../../components/app-button";
import { ArrowCurve, CalenderIcon, PasswordClose } from '../../assets/svg'
import { AppLayout } from "../../components/custom-ui";
import CalendarUI from "./components/calendar-ui";
import CountryList from "./components/country-list";
import { AuthScreenProps } from "../../typings/navigations";
import { AUTHSCREENS } from "../../constants/screens";
import authMethods from "./-auth-methods";
const { wp, hp, height } = useDimension()


export default ({ navigation }: AuthScreenProps<AUTHSCREENS.CRAETE_ACCOUNT>) => {
   const [openModal, setOpenModal] = React.useState(false)
   const [regData, setRegData] = React.useState({
      dob: '', showCountry: false, selectedCountry: '+234',
      fName: '', lName: '', phoneNumber: '', nickName: ''
   })

   const fnameRef = React.useRef<any>(null)
   const phoneInputRef = React.useRef<any>(null)

   let aMinDate: any = new Date()
   aMinDate.setFullYear(aMinDate.getFullYear() - 18)
   aMinDate = aMinDate.toISOString().substring(0, 10)

   React.useEffect(() => {
      // fnameRef?.current?.focus()
   }, [])


   return (
      <AppLayout style={{ backgroundColor: COLORS.WHITE, height: '100%' }}>
         <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
         <ScrollView>
            <View style={{ marginTop: wp(25), }}>
               <AppText fontSize={6} semiBold>Tell us about you</AppText>
               <AppText style={{ color: COLORS.GRAY1, marginTop: 11 }}>Please use your name as it appears on your ID.</AppText>
               <AppInput ref={fnameRef} textContentType="givenName"
                  returnKeyType="next" label="Legal First Name*"
                  viewProps={{ style: { marginTop: wp(10) } }}
                  onChangeText={txt => setRegData({ ...regData, fName: txt })}
               />
               <AppInput returnKeyType="next" label="Legal Last Name*"
                  viewProps={{ style: { marginTop: 18 } }} textContentType="familyName"
                  onChangeText={txt => setRegData({ ...regData, lName: txt })}
               />
               <AppInput autoCapitalize="none" returnKeyType="next" label="Nick Name" maxLength={25}
                  onChangeText={txt => setRegData({ ...regData, nickName: txt })}
                  viewProps={{ style: { marginTop: 18 } }} textContentType="nickname" />

               <AppCustomInput keepOnFocus={regData.phoneNumber.length !== 0} label="Phone Number" viewProps={{ style: dStyle.phoneDStyl }}>
                  <TouchableOpacity style={dStyle.phoneCode} onPress={() => {
                     setRegData({ ...regData, showCountry: !regData.showCountry })
                     phoneInputRef?.current?.focus()
                  }}>
                     <AppText fontWeight="700">{regData.selectedCountry}</AppText>
                     <ArrowCurve style={{ marginLeft: 14 }} />
                  </TouchableOpacity>
                  <TextInput placeholder="Phone number" maxLength={13} textContentType="telephoneNumber"
                     keyboardType="phone-pad"
                     onChangeText={txt => setRegData({ ...regData, phoneNumber: txt })}
                     style={dStyle.phoneComplete} ref={phoneInputRef} />
               </AppCustomInput>

               <CountryList showList={regData.showCountry}
                  onClose={() => setRegData({ ...regData, showCountry: false })}
                  onSubmit={(txt?: any) => setRegData({ ...regData, selectedCountry: txt, showCountry: false })} />

               <AppCustomInput viewProps={{ style: { marginTop: 18 } }} label="Date of Birth*"
                  keepOnFocus={regData.dob.length !== 0}  >
                  <View style={dStyle.dobDstyl}>
                     <AppText fontWeight="700">{regData?.dob || 'Choose date'}</AppText>
                     <TouchableOpacity onPress={() => setOpenModal(true)}>
                        <CalenderIcon />
                     </TouchableOpacity>
                  </View>
               </AppCustomInput>

               <AppButton style={{ marginTop: 18 }} onPress={() => authMethods.validateAccountData(regData, navigation)}>
                  <AppText color={COLORS.WHITE} fontWeight="700">Continue</AppText>
               </AppButton>

               <View style={{ marginTop: hp(4), width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                  <AppText color={COLORS.BLACK1} textAlign="center">By clicking Continue, you agree to our <AppText color={COLORS.PRIMARY}>Terms of Service</AppText> and <AppText color={COLORS.PRIMARY}>Privacy Policy</AppText>.</AppText>
               </View>
            </View>
         </ScrollView>
         <Modal isVisible={openModal} backdropOpacity={0.2} style={{ justifyContent: 'flex-end' }}>
            <CalendarUI maxDate={aMinDate} startDate={aMinDate} numberOfYearsToRun={-100} onSubmit={(date?: any) => {
               setRegData({ ...regData, dob: date })
               setOpenModal(false)
            }} onClose={() => setOpenModal(false)} />
         </Modal>
      </AppLayout >
   )
}

const dStyle = StyleSheet.create({
   phoneDStyl: {
      marginTop: 18, flexDirection: 'row',
      alignItems: 'center'
   },
   phoneCode: {
      flexDirection: 'row', paddingVertical: 7,
      paddingRight: 15, borderRightWidth: 1,
      borderRightColor: COLORS.GRAY2, alignItems: 'center',
   },
   phoneComplete: {
      width: '80%', height: '100%',
      fontWeight: '700', paddingHorizontal: 15
   },
   dobDstyl: {
      height: '100%', flexDirection: 'row',
      alignItems: 'center', justifyContent: 'space-between',
   }


})