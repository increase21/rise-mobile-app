import Toast from 'react-native-toast-message';
import { Button } from 'react-native'
import { CommonActions } from '@react-navigation/native';


class utilityFunctions {
   constructor() { }


   //for timing out request
   timeoutRequest(ms: number, promise: any) {
      let returnResult = false
      return new Promise((resolve, reject) => {
         //create a timeout
         let timeoutId = setTimeout(() => {
            console.log("request time up")
            reject(new Error("promise timeout"))
         }, ms);
         // when the promise resolves
         promise.then((res?: any) => {
            clearTimeout(timeoutId);
            //if the request resolve within the time range
            if (returnResult === false) {
               resolve(res);
            }
         }).catch((e?: any) => {
            //when the promise reject throw error
            returnResult = true
            reject(e)
         })
      })
   }

   async sendRequest(url: string, body?: any, method?: string, timeout?: number) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let option = {
         headers: headers, url: url, method: method || 'GET',
         body: body ? JSON.stringify(body) : undefined,
      }
      //send the request and wait for 15secs
      return await this.timeoutRequest(timeout || 15000, fetch(url, option))
         .then((res?: any) => res.json().then((data?: any) => ({ data, statusCode: res.status })))
         .catch((error?: any) => error)
   }
   //for navigating to a screen
   navigateToScreen(navigation?: any, name?: any, param?: any) {
      navigation.navigate(name, param)
   }

   //for reseting navigation to a screen
   resetNavigation(navigation: any, name: any, param?: any) {
      navigation.dispatch(CommonActions.reset({
         index: 0,
         routes: [{ name: name, params: param }]
      }))
   }


   showToast(msg: any, type?: 'success' | 'error') {
      Toast.show({ type: type || 'error', text1: msg })
   }
}

const helpers = new utilityFunctions()

export default helpers;