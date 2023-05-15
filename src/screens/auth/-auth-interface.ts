export type CreateAccountProps = {
   fName?: string;
   lName?: string;
   nickName?: string;
   dob?: string;
   email?: string;
   password?: string;
   phoneNumber: string;
   selectedCountry?: string
}

export type LoginAccountProps = {
   email: string;
   password: string
}

export type ErrorObject = {
   message: string
}