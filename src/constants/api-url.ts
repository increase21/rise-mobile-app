const BaseURL = 'https://rise-rn-test-api-gb2v6.ondigitalocean.app'

export const apiUrl = {
   auth: {
      createAccount: `${BaseURL}/api/v1/users`,
      signIn: `${BaseURL}/api/v1/sessions`
   }
}