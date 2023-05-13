import { useMutation } from "react-query";
import { AUTHSCREENS } from "../../constants/screens";
import helpers from "../../helpers";
import { createAccountProps, loginAccountProps } from "./-auth-interface";
import { apiUrl } from "../../constants/api-url";
import { useAccountStore } from "../../store/account-store";

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

      if (!data.dob || !/\d{4}-\d{2}-\d{2}/.test(data.dob)) {
         return helpers.showToast("A valid date of birth is required")
      }

      helpers.navigateToScreen(navigation, AUTHSCREENS.CRAETE_ACCOUNT, data)
   }

   createAccount() {
      const processReqest = (data: createAccountProps, navigation: any) => {
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
         if (!data.nickName) {
            return helpers.showToast("Nickname is required")
         }

         if (!/^[\w]+$/i.test(data.nickName)) {
            return helpers.showToast("Nickname must not have spaces or special characters")
         }
         let sendData: any = {
            first_name: data.fName,
            last_name: data.lName,
            email_address: data.email,
            password: data.password,
            date_of_birth: data.dob,
            username: data.nickName,
            phone_number: data?.selectedCountry?.replace("+", "") + data.phoneNumber?.replace(/^0/, "")
         }
         console.log(sendData)
         useAccountStore(state => state).setUserData(sendData)
         helpers.navigateToScreen(navigation, AUTHSCREENS.SIGN_IN)
         // mutation.mutate(sendData)
      }


      const mutation = useMutation(payload => helpers.sendRequest(apiUrl.auth.createAccount, payload, 'POST'), {
         onSuccess: (res) => {
            console.log(res, "restunherker")
            //if the resquest is not successful
            if (res.statusCode !== 200) {
               let getErr = Object.values(res?.data?.data || res?.data || {})
               //if there's an error
               helpers.showToast(getErr.length > 0 ? getErr[0] : "Request Failed")
            }

         },
         onError: (error) => {
            console.log(error, "restun")
         }
      })
      const { error, data, reset, isLoading } = mutation
      return { processReqest, error, data, reset, isLoading }
   }


   loginAccount() {
      const processReqest = (data: loginAccountProps, navigation: any) => {
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

         // let sendData: any = {
         //    email_address: data.email,
         //    password: data.password
         // }

         let sendData: any = {
            "id": "417d7cff-3494-4261-9553-b8e7f0f6a40c",
            "created_at": "2022-02-08T06:04:06.635Z",
            "first_name": "Tobi",
            "last_name": "Samuel",
            "email_address": "tobi.sams@gmail.com",
            "username": null,
            "phone_number": null,
            "date_of_birth": "1990-10-14T23:00:00.000Z"
         }

         useAccountStore(state => state).setUserData(sendData)
         helpers.navigateToScreen(navigation, AUTHSCREENS.SIGN_IN)
         // mutation.mutate(sendData)
      }


      const mutation = useMutation(payload => helpers.sendRequest(apiUrl.auth.signIn, payload, 'POST'), {
         onSuccess: (res) => {
            //if the resquest is not successful
            if (res.statusCode !== 200) {
               let getErr = Object.values(res?.data?.data || res?.data || { error: "Request Failed" })
               //if there's an error
               helpers.showToast(getErr[0])
            }

         },
         onError: (error) => {
         }
      })
      const { error, data, reset, isLoading } = mutation
      return { processReqest, error, data, reset, isLoading }
   }

}

export default new authMethods()