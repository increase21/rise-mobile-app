import { View } from "react-native"
import { ComponentNavigation } from "../../../typings/components"
import AppButton from "../../../components/app-button"
import { COLORS } from "../../../constants/app-colors"
import { AppText } from "../../../components/app-text"
import { AUTHSCREENS } from "../../../constants/screens"
import { SignUpStory1, SignUpStory2, SignUpStory3 } from '../../../assets/images'
import useDimension from "../../../helpers/app-dimension"
import { MutableRefObject } from "react"
const { wp } = useDimension()


export type Banner = {
   title?: any;
   comment?: any;
   img?: any;
   color?: string;
   renderButton?: any
   bgColor?: any
}


export interface ScreenIndicatorProps {
   stage?: number;
   backgroundColor?: string
}


export interface ScreenPageProps {
   banner: Banner;
   swiperRef: any;
   index?: number;
   buttonTitle?: string;
   color?: string;
   renderButton?: React.ReactNode
}




const Stage3Buttons = ({ navigation }: ComponentNavigation) => (
   <View style={{ width: '100%', marginTop: wp(15), }}>
      <AppButton onPress={() => navigation.navigate(AUTHSCREENS.ACCOUNT_INFO)}
         backgroundColor={COLORS.PRIMARY}>
         <AppText color={COLORS.WHITE} bold>Sign Up</AppText>
      </AppButton>
      <AppButton onPress={() => navigation.navigate(AUTHSCREENS.SIGN_IN)}
         backgroundColor="rgba(113, 135, 156, 0.1)" style={{ marginTop: 10 }}>
         <AppText color={COLORS.PRIMARY} textAlign='center' bold>Sign In</AppText>
      </AppButton>
   </View>
)


export const StoryScreenData = [
   {
      title: 'Quality assets',
      comment: 'Rise invests your money into the best dollar investments around the world.',
      color: COLORS.ORANGE,
      img: SignUpStory1,
      bgColor: '#fffbf7'
   },
   {
      title: 'Superior Selection',
      comment: 'Our expert team and intelligent algorithms select assets that beat the markets',
      img: SignUpStory2,
      bgColor: '#faf2f7',
      color: COLORS.BROWN
   },
   {
      title: 'Better Performance',
      comment: 'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
      bgColor: '#f5fcfc',
      img: SignUpStory3,
      color: COLORS.PRIMARY,
      renderButton: ({ navigation }: ComponentNavigation) => <Stage3Buttons navigation={navigation} />
   }
]