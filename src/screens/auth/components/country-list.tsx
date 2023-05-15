import React from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import { AppText } from "../../../components/app-text";
import { TouchableOpacity, View } from "react-native";
import useDimension from "../../../helpers/app-dimension";
const { hp } = useDimension()

interface CountryListProps {
   onSubmit: (value?: string) => void;
   showList: boolean;
   onClose: () => void
}

const CountryList = (props: CountryListProps) => (
   <View>
      <CountryPicker
         lang={'en'}
         show={props.showList}
         pickerButtonOnPress={(item) => {
            props.onSubmit(item.dial_code);
         }}
         style={{
            modal: {
               height: hp(70),
            }
         }}
         onBackdropPress={() => { props.onClose() }}
      />
   </View>
);

export default CountryList;