import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Keyboard } from 'react-native';

import {
   CodeField,
   Cursor,
   useBlurOnFulfill,
   useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import useDimension from '../../../helpers/app-dimension';
import { COLORS } from '../../../constants/app-colors';
import { AppText } from '../../../components/app-text';
const { wp, hp } = useDimension()
const CELL_COUNT = 6;

interface OTPProps {
   value?: string
}

const OtpScreen = (props: OTPProps) => {
   const ref = useBlurOnFulfill({ value: props?.value, cellCount: CELL_COUNT });
   React.useEffect(() => {
      Keyboard.addListener("keyboardWillShow", () => Keyboard.dismiss())
   }, [])
   return (
      <CodeField
         ref={ref}
         {...props}
         value={props?.value}
         cellCount={CELL_COUNT}
         rootStyle={styles.codeFieldRoot}
         keyboardType="number-pad"
         textContentType="oneTimeCode"
         renderCell={({ index, symbol, isFocused }) => (
            <AppText key={index} style={[styles.cell, isFocused && styles.focusCell]}>
               {(symbol ? '•' : '') || (isFocused ? <Cursor /> : null)}
            </AppText>
         )}
      />
   );
};


const styles = StyleSheet.create({
   root: { flex: 1, padding: 20 },
   codeFieldRoot: { marginTop: 20 },
   cell: {
      width: wp(12.5),
      height: hp(5.5),
      lineHeight: 38,
      fontSize: wp(7),
      fontWeight: '900',
      fontFamily: 'TomatoGrotesk-Regular',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'rgba(113, 135, 156, 0.2)',
      textAlign: 'center',
   },
   focusCell: {
      borderColor: COLORS.PRIMARY,
   },
});


export default OtpScreen;

