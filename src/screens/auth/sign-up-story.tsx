import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { LeftArrow, } from '../../assets/svg'
import { COLORS } from '../../constants/app-colors'
import useDimension from '../../helpers/app-dimension'
import { AppText } from '../../components/app-text'
import AppButton from '../../components/app-button'
import { AUTHSCREENS } from '../../constants/screens'
import { AuthScreenProps } from '../../typings/navigations'
import { ScreenIndicatorProps, ScreenPageProps, StoryScreenData } from './components/story-data-list'
const { wp, hp } = useDimension()


const ScreenIndicator = (props: ScreenIndicatorProps) => (
   <View style={{ flexDirection: 'row' }}>
      <View style={[dStyle.indicaColor, props.stage === 1 && { backgroundColor: props.backgroundColor }]}></View>
      <View style={[dStyle.indicaColor, { marginHorizontal: 15 }, props.stage === 2 && { backgroundColor: props.backgroundColor }]}></View>
      <View style={[dStyle.indicaColor, props.stage === 3 && { backgroundColor: props.backgroundColor }]}></View>
   </View>
)

const ScreenPage = ({ banner, swiperRef, index, color, renderButton, buttonTitle }: ScreenPageProps) => (
   <View style={[dStyle.slide1, { backgroundColor: banner.bgColor }]}>
      <Image source={banner.img} style={dStyle.imgStyle} />
      <ScreenIndicator stage={1} backgroundColor={color} />
      <View style={{ width: '100%', marginTop: wp(15) }}>
         <AppText fontFamily="Tomato" semiBold fontSize={5} color={color}>{banner.title}</AppText>
         <AppText style={{ marginTop: 12, lineHeight: hp(2.4) }}>{banner.comment}</AppText>
      </View>
      {renderButton || <View style={dStyle.rowStyle}>
         <AppButton disabled={index === 0}
            style={[dStyle.prevBtn, index === 0 && { backgroundColor: COLORS.GRAY2 }]}
            onPress={() => swiperRef.current.scrollBy(-1)}>
            <LeftArrow stroke={index === 0 ? COLORS.GRAY1 : color} />
         </AppButton>
         <AppButton style={dStyle.nextBtn} onPress={() => swiperRef.current.scrollBy(1)}>
            <AppText color={color} fontWeight='700'>{buttonTitle || 'Next'}</AppText>
            <LeftArrow style={{ transform: [{ rotate: '180deg' }] }} stroke={color} />
         </AppButton>
      </View>}
   </View>
)


export default ({ navigation }: AuthScreenProps<AUTHSCREENS.SIGN_UP_STORY>) => {
   const swiperRef = React.useRef(null)
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
         <Swiper ref={swiperRef}
            style={dStyle.wrapper} showsPagination={false} loop={false}
            showsButtons={false}>
            {StoryScreenData.map((data, key) => <ScreenPage banner={data} index={key} key={key}
               color={data.color} swiperRef={swiperRef}
               renderButton={data.renderButton && data.renderButton({ navigation: navigation })}
            />)}
         </Swiper>
      </ScrollView>
   )
}


const dStyle = StyleSheet.create({
   wrapper: {},
   slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fffbf7',
      paddingVertical: 10,
      paddingHorizontal: 20,
   },
   slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fcf7fb'
   },
   slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
   },
   imgStyle: {
      width: wp(40), height: hp(40),
      resizeMode: 'contain', aspectRatio: 1
   },
   text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
   },
   indicaColor: {
      borderRadius: 50, height: 6,
      width: 6, backgroundColor: COLORS.GRAY2
   },
   nextBtn: {
      width: wp(24), justifyContent: 'space-between',
      padding: wp(4), backgroundColor: 'rgba(113, 135, 156, 0.1)'
   },
   prevBtn: {
      width: wp(10),
      backgroundColor: 'rgba(113, 135, 156, 0.1)'
   },
   rowStyle: {
      width: '100%', marginTop: wp(15),
      flexDirection: 'row', justifyContent: 'space-between'
   }
})
