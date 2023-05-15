import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen'
import Toast, { ErrorToast, ToastConfigParams, } from 'react-native-toast-message';
import { QueryClientProvider } from 'react-query'
import RootStack from './src/navigations/root-stack';
import { reactQueryClient } from './src/store/react-query-client';
import { COLORS } from './src/constants/app-colors';

const CustomToast = (props?: any) => (
   <ErrorToast {...props}
      style={{ height: 55, backgroundColor: COLORS.ORANGE }}
      text1Style={{ fontSize: 17, color: COLORS.WHITE }}
   />)

class App extends React.Component {
   componentDidMount(): void {
      listenOrientationChange(this)
   }
   componentWillUnmount(): void {
      removeOrientationListener()
   }

   render(): React.ReactNode {
      return (
         <QueryClientProvider client={reactQueryClient}>
            <NavigationContainer>
               <RootStack />
            </NavigationContainer>
            <Toast config={{
               error: (props) => (<CustomToast {...props} />),
            }} />
         </QueryClientProvider>
      )
   }
}

export default App;