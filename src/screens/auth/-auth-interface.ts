export interface createAccountProps {
   fName?: string;
   lName?: string;
   nickName?: string;
   dob?: string;
   email?: string;
   password?: string;
   phoneNumber: string;
   selectedCountry?: string
}

export interface loginAccountProps {
   email: string;
   password: string
}