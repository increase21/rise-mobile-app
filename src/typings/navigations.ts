import { ParamListBase, RouteProp } from '@react-navigation/native';
import { AUTHSCREENS, HOMESCREEN, PLANSCREEN, ROOTSCREEN } from '../constants/screens';


interface ISubNavigator<T extends ParamListBase, K extends keyof T> {
   screen: K;
   params?: T[K];
   initial?: boolean;
}

export type HometabParamList = {
   [HOMESCREEN.INDEX_SCREEN]?: undefined;
   [HOMESCREEN.WALLET_SCREEN]?: undefined;
   [HOMESCREEN.FEED_SCREEN]?: undefined;
   [HOMESCREEN.PLAN_SCREEN]?: undefined;
   [HOMESCREEN.PROFILE_SCREEN]?: undefined;
}
export type HometabScreenProps<T extends keyof HometabParamList> = {
   navigation: any;
   route: RouteProp<HometabParamList, T>;
};


export type PlanScreenParamList = {
   [PLANSCREEN.INDEX_SCREEN]: undefined;
   [PLANSCREEN.CREATE_PLAN]: undefined;
   [PLANSCREEN.CREATE_PLAN2]: undefined;
   [PLANSCREEN.REVIEW_PLAN]: undefined;
}
export type PlanScreenProps<T extends keyof PlanScreenParamList> = {
   navigation: any;
   route: RouteProp<PlanScreenParamList, T>;
};






export type AuthStackParamList = {
   [AUTHSCREENS.ACCOUNT_INFO]?: undefined;
   [AUTHSCREENS.CRAETE_ACCOUNT]?: undefined;
   [AUTHSCREENS.SET_PIN]?: undefined;
   [AUTHSCREENS.SET_PIN_CONFIRM]?: undefined;
   [AUTHSCREENS.SIGN_IN]?: undefined;
   [AUTHSCREENS.SIGN_UP_STORY]?: undefined;
}

export type RootStackParamList = {
   [ROOTSCREEN.AUTH_SCREEN]: undefined
   [ROOTSCREEN.HOME_SCREEN]: undefined
}

export type RootStackParam = RootStackParamList & AuthStackParamList

export type StackScreenProps<T extends keyof RootStackParam> = {
   navigation: any;
   route: RouteProp<RootStackParam, T>;
};



