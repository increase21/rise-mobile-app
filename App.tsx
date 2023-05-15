import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen'
import Toast from 'react-native-toast-message';
import { QueryClientProvider } from 'react-query'
import RootStack from './src/navigations/root-stack';
import { reactQueryClient } from './src/store/react-query-client';


class App extends React.Component {
   // componentDidMount(): void {
   //    listenOrientationChange(this)
   // }
   // componentWillUnmount(): void {
   //    removeOrientationListener()
   // }

   render(): React.ReactNode {
      return (
         <QueryClientProvider client={reactQueryClient}>
            <NavigationContainer>
               <RootStack />
            </NavigationContainer>
            <Toast />
         </QueryClientProvider>
      )
   }
}

export default App;