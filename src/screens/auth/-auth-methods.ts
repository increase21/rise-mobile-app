import { useMutation, useQuery } from "react-query";
import { AUTHSCREENS, ROOTSCREEN } from "../../constants/screens";
import helpers from "../../helpers";
import { createAccountProps, loginAccountProps } from "./-auth-interface";
import { apiUrl } from "../../constants/api-url";
import { globalData } from "../../store";

class authMethods {
   constructor() { }


   validateAccountData(data: createAccountProps, navigation: any): void {
      //validate the data that is coming in
      if (!data.fName || !/^[a-z\-]+$/i.test(data.fName)) {
         return helpers.showToast(!data.fName ? "first name is required" : "Only alphabet is required for firstname")
      }

      if (!data.lName || !/^[a-z\-]+$/i.test(data.lName)) {
         return helpers.showToast(!data.lName ? "last name is required" : "Only alphabet is required for lastname")
      }

      if (data.phoneNumber) {
         if (!/^[0-9]+$/.test(data.phoneNumber)) {
            return helpers.showToast("A valid phone number is required")
         }
      }

      if (data.nickName) {
         if (!/^[\w]+$/i.test(data.nickName)) {
            return helpers.showToast("Nickname must not have spaces or special characters")
         }
      }

      if (!data.dob || !/\d{4}-\d{2}-\d{2}/.test(data.dob)) {
         return helpers.showToast("A valid date of birth is required")
      }

      helpers.navigateToScreen(navigation, AUTHSCREENS.CRAETE_ACCOUNT, data)
   }

   createAccount(navigation: any, setXterCheck?: any) {
      const { processReqest: processReqestLogin } = this.loginAccount()

      let sendLoginData: any = { email: '', password: '' }

      const processReqest = (data: createAccountProps) => {
         //if there's no email
         if (!data.email) {
            return helpers.showToast("email is required")
         }
         if (!data.password) {
            return helpers.showToast("password is required")
         }
         //if password is not 8min
         if (data.password.length < 8) {
            return helpers.showToast("password is must be minimum of 8")
         }

         let sendData: any = {
            first_name: data.fName,
            last_name: data.lName,
            email_address: data.email,
            password: data.password,
            date_of_birth: "1" + data.dob,
            username: data.nickName || undefined,
         }
         //if there's phone number
         if (data.phoneNumber) {
            sendData.phone_number = data?.selectedCountry?.replace("+", "") + data.phoneNumber?.replace(/^0/, "")
         }

         //add the login data
         sendLoginData.email = sendData.email_address
         sendLoginData.password = sendData.password

         mutation.mutate(sendData)
      }

      const mutation = useMutation(payload => helpers.sendRequest(apiUrl.auth.createAccount, payload, 'POST'), {
         onSuccess: (res) => {
            //if the resquest is not successful
            if (res.statusCode !== 200) {
               let getErr = Object.values(res?.data?.data || res?.data || {})
               //if there's an error
               return helpers.showToast(getErr.length > 0 ? getErr[0] : "Request Failed")
            }
            //login the user to get the token for the account
            processReqestLogin(sendLoginData)
            //show the success message
            setXterCheck((d: object) => ({ ...d, showSuccess: true }))
         },
         onError: (error) => {
            helpers.showToast("Request Failed")
         }
      })
      const { error, data, reset, isLoading } = mutation
      return { processReqest, error, data, reset, isLoading }
   }

   loginAccount(navigation?: any) {
      const processReqest = (data: loginAccountProps,) => {
         //if there's no email
         if (!data.email) {
            return helpers.showToast("email is required")
         }
         if (!data.password) {
            return helpers.showToast("password is required")
         }
         //if password is not 8min
         if (data.password.length < 8) {
            return helpers.showToast("password is must be minimum of 8")
         }

         let sendData: any = {
            email_address: data.email,
            password: data.password
         }

         mutation.mutate(sendData)
      }

      const mutation = useMutation(payload => helpers.sendRequest(apiUrl.auth.signIn, payload, 'POST'), {
         onSuccess: (res) => {
            //if the resquest is not successful
            if (res.statusCode !== 200) {
               let getErr = Object.values(res?.data?.data || res?.data || { error: "Request Failed" })
               //if there's an error
               return helpers.showToast(getErr[0])
            }
            //set the data
            helpers.setGlobalUserData(res.data)
            // setUserData(res.data)
            helpers.localStorageSave("_userdata", res.data)

            //if there's navigation, navigate the user to home
            if (navigation) {
               helpers.resetNavigation(navigation, ROOTSCREEN.HOME_SCREEN)
            }
         },
         onError: (error) => {
         }
      })

      const { error, data, reset, isLoading } = mutation
      return { processReqest, error, data, reset, isLoading }
   }

   validateSession(keyName: string, navigation: any) {
      const { isLoading, refetch, data, error } = useQuery([keyName],
         async () => {
            //get the token if exist
            let getToken = await helpers.localStorageGet('_userdata')
            //if not exist
            if (!getToken || !getToken.email_address) {
               helpers.resetNavigation(navigation, AUTHSCREENS.SIGN_UP_STORY)
               return {}
            }
            helpers.setGlobalUserData(getToken)
            //if token exist, confirm validity
            let confirmToken = await helpers.sendRequest(apiUrl.auth.signIn).catch(e => ({ error: e }))
            //if the token is not valid
            if (confirmToken && confirmToken.data && confirmToken.data.email_address) {
               helpers.setGlobalUserData({ ...getToken, ...confirmToken.data })
               helpers.resetNavigation(navigation, ROOTSCREEN.HOME_SCREEN)
               return {}
            }
            helpers.resetNavigation(navigation, AUTHSCREENS.SIGN_IN)
            return {}
         }, { retry: false })
      return { isLoading, refetch, data, error }
   }

   logoutAccount(navigation: any) {
      let userData: any = globalData.userData
      delete userData.token
      helpers.localStorageSave("_userdata", userData)
      helpers.resetNavigation(navigation, ROOTSCREEN.AUTH_SCREEN, { screen: AUTHSCREENS.SIGN_IN })
   }

   getQuotes(runQuery?: boolean) {
      const { isLoading, refetch, data } = useQuery(['daily-quote'],
         () => helpers.sendRequest(apiUrl.auth.quote), { enabled: runQuery })
      return { isLoading, refetch, data }
   }

}

export default new authMethods()