import React from "react";
import SuccessPage from "../../components/success-page";
import { HometabScreenProps } from "../../typings/navigations";
import { AUTHSCREENS, HOMESCREEN, ROOTSCREEN } from "../../constants/screens";
import helpers from "../../helpers";
import AuthMethods from "../auth/-auth-methods";

export default ({ navigation }: HometabScreenProps<HOMESCREEN.FEED_SCREEN>) => (
   <SuccessPage title="Profile" comment="Coming soon" btnTitle="Logout"
      onPress={() => AuthMethods.logoutAccount(navigation)} />
)