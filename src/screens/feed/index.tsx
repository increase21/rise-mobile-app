import React from "react";
import SuccessPage from "../../components/success-page";
import { HometabScreenProps } from "../../typings/navigations";
import { HOMESCREEN } from "../../constants/screens";
import helpers from "../../helpers";

export default ({ navigation }: HometabScreenProps<HOMESCREEN.FEED_SCREEN>) => (
   <SuccessPage title="Feed" comment="Coming soon"
      onPress={() => helpers.navigateToScreen(navigation, HOMESCREEN.INDEX_SCREEN)} />
)