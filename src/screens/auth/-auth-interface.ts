export type createAccountProps = {
   fName?: string;
   lName?: string;
   nickName?: string;
   dob?: string;
   email?: string;
   password?: string;
   phoneNumber: string;
   selectedCountry?: string
}

export type loginAccountProps = {
   email: string;
   password: string
}