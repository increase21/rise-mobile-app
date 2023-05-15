import {
   LineChart as LineChartChatKit
} from "react-native-chart-kit";
import useDimension from "../../../helpers/app-dimension";
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import { AppText } from "../../../components/app-text";
import { COLORS } from "../../../constants/app-colors";
import { AppCircle } from "../../../components/custom-ui";
import React from "react";
import { AppSizeBox } from "../../../components/app-card";
import { FR_AC_JSB } from "../../../constants/global-style";
import { DataPropsObject } from "./plan-details";

const { width, wp, hp } = useDimension()

interface PlanGraphProps {
   data: DataPropsObject;
   planInfo?: object | any
}

interface PlanGraphChild {
   labelList: string[],
   totalAmount: number
}

type GenYearRes = {
   yearArray: string[];
   monthCount: number;
   year: string;
}

const generateYear = (selectedDate: string): GenYearRes => {
   //if there's not date
   if (!selectedDate) return { yearArray: [], monthCount: 0, year: '' }
   let dnNow = new Date().getFullYear()
   let dnAfter = new Date(selectedDate).getFullYear()
   let diff = dnAfter - dnNow
   let yrsNum = []
   for (let i = 0; i < diff; i++) {
      yrsNum.push(String(dnNow++))
   }
   yrsNum = yrsNum.sort(() => Math.random() - Math.random()).slice(0, 5)
   yrsNum.push(String(dnAfter))
   yrsNum.sort((a, b) => parseInt(a) - parseInt(b))
   return {
      yearArray: yrsNum,
      monthCount: diff * 12,
      year: new Date(selectedDate).toDateString()
   }
}

export const PlanReviewGraph = ({ data, planInfo }: PlanGraphProps) => {
   let runYearData = generateYear(planInfo?.createdAt)
   return (
      <View>
         <View style={{ alignItems: 'center' }}>
            <AppText fontSize={3.2} textTransform="capitalize" color={COLORS.GRAY1}>{planInfo?.plan_name}</AppText>
            <AppText style={{ marginVertical: hp(1) }} bold fontFamily="Tomato"
               fontSize={7} color={COLORS.BLACK1}>${parseFloat(data?.total_invested).toLocaleString()}</AppText>
            <AppText fontSize={3.7} color={COLORS.BLACK1}>{runYearData?.year}</AppText>
         </View>
         <AppSizeBox marginTop={hp(.4)} />
         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <AppCircle backgroundColor={COLORS.GRAY3} height={hp(1)} width={wp(2)}
                  style={{ marginRight: wp(2) }} />
               <AppText fontSize={3.3}>
                  Investments • ${parseFloat(planInfo?.amount).toLocaleString()}
               </AppText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <AppCircle backgroundColor={COLORS.PRIMARY} height={hp(1)}
                  width={wp(2)} style={{ marginRight: wp(2) }} />
               <AppText fontSize={3.3}>
                  Returns • ${(parseFloat(data?.total_invested) - parseFloat(planInfo?.amount)).toLocaleString()}
               </AppText>
            </View>
         </View>
         <AppSizeBox marginTop={hp(.4)} />
         <PlanGraph1 labelList={runYearData?.yearArray} totalAmount={(parseFloat(data?.total_invested) / 1000)} />
         <AppSizeBox marginTop={hp(0.6)} />
         <View style={[FR_AC_JSB, { paddingHorizontal: 15 }]}>
            <AppText color={COLORS.GRAY1}>Estimated monthly investment</AppText>
            <AppText fontFamily="Tomato">${Math.round(parseFloat(data?.total_invested) / runYearData?.monthCount).toLocaleString()}</AppText>
         </View>
      </View>
   )
}


const PlanGraph1 = ({ labelList, totalAmount }: PlanGraphChild) => (
   <LineChartChatKit
      data={{
         labels: labelList,
         datasets: [{
            data: [
               totalAmount * .2,
               totalAmount * .4,
               totalAmount * .6,
               totalAmount * .8,
               totalAmount
            ]
         }]
      }}
      withDots={false}
      withVerticalLines={false}
      width={width} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      withOuterLines={false}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
         backgroundColor: COLORS.WHITE,
         backgroundGradientFrom: COLORS.WHITE,
         backgroundGradientTo: COLORS.WHITE,
         decimalPlaces: 0, // optional, defaults to 2dp
         color: (opacity = 1) => COLORS.PRIMARY,
         // labelColor: (opacity = 1) => COLORS.PRIMARY,
         // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
         labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
         style: {
            borderRadius: 16
         },
         propsForDots: {
            r: "6",
            strokeWidth: "2",
            fill: COLORS.PRIMARY,
            stroke: COLORS.PRIMARY,
         },
         propsForBackgroundLines: {
            stroke: COLORS.GRAY2,
            strokeWidth: 1,
            strokeDasharray: ["0", "0", "0", "0"],
            strokeLinejoin: "round"
         },
         propsForHorizontalLabels: {
            stroke: "transparent",
            fill: COLORS.GRAY3,
            fontFamily: 'TomatoGrotesk-Regular'
         },
         propsForVerticalLabels: {
            stroke: "transparent",
            fill: COLORS.GRAY3,
            fontFamily: 'TomatoGrotesk-Regular'

         }
      }}
      bezier
      style={{

      }}
   />
)

export const PlanOverViewGraph = ({ data }: PlanGraphProps) => {
   const matureDate = new Date(data?.maturity_date)
   let totalPerd = parseFloat(String(data?.invested_amount)) + parseFloat(data?.total_returns)
   totalPerd = isNaN(totalPerd) ? 0 : totalPerd
   return (
      <View style={{ backgroundColor: COLORS.PRIMARY, borderRadius: 16, paddingVertical: hp(2.5) }}>
         <View style={{ alignItems: 'center' }}>
            <AppText color={COLORS.WHITE}>Performance</AppText>
            <AppText style={{ marginVertical: hp(.5) }} bold fontFamily="Tomato"
               fontSize={3} color={COLORS.WHITE}>${totalPerd.toLocaleString()}</AppText>
            <AppText color={COLORS.WHITE}>{matureDate.toDateString()}</AppText>
         </View>
         <AppSizeBox marginTop={hp(.3)} />
         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <AppCircle backgroundColor={COLORS.WHITE} height={hp(1)} width={wp(2)}
                  style={{ marginRight: wp(2) }} />
               <AppText fontSize={3} color={COLORS.WHITE}>
                  Investments • ${data?.invested_amount}
               </AppText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <AppCircle backgroundColor={'#41BCC4'} height={hp(1)}
                  width={wp(2)} style={{ marginRight: wp(2) }} />
               <AppText fontSize={3} color={COLORS.WHITE}>
                  Returns • ${data?.total_returns}
               </AppText>
            </View>
         </View>
         <AppSizeBox marginTop={hp(.3)} />
         <PlanGraph2 labelList={[]} totalAmount={totalPerd / 1000} />
         <View style={[FR_AC_JSB, dStyle.monHolda]}>
            <View style={[dStyle.moneyRow, { backgroundColor: COLORS.WHITE }]}><AppText>1M</AppText></View>
            <View style={dStyle.moneyRow}><AppText color={COLORS.WHITE} textTransform="uppercase">3m</AppText></View>
            <View style={dStyle.moneyRow}><AppText color={COLORS.WHITE} textTransform="uppercase">6m</AppText></View>
            <View style={dStyle.moneyRow}><AppText color={COLORS.WHITE}>All</AppText></View>
         </View>
      </View>
   )
}

const PlanGraph2 = ({ totalAmount, labelList }: PlanGraphChild) => (
   <LineChartChatKit
      data={{
         labels: labelList,
         datasets: [
            {
               data: [
                  totalAmount * .2,
                  totalAmount * .4,
                  totalAmount * .6,
                  totalAmount * .8,
                  totalAmount
               ],
            }
         ]
      }}
      withDots={false}
      withVerticalLines={false}
      width={width} // from react-native
      height={270}
      yAxisLabel="$"
      yAxisSuffix="k"
      withVerticalLabels={false}
      withOuterLines={false}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
         backgroundColor: COLORS.PRIMARY,
         backgroundGradientFrom: COLORS.PRIMARY,
         backgroundGradientTo: COLORS.PRIMARY,
         decimalPlaces: 2, // optional, defaults to 2dp
         color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
         labelColor: (opacity = 1) => `rgba(45, 167, 174, ${opacity})`,
         style: {
            borderRadius: 16
         },
         propsForDots: {
            r: "6",
            strokeWidth: "2",
            fill: COLORS.WHITE,
            stroke: COLORS.WHITE,
         },
         propsForBackgroundLines: {
            stroke: COLORS.GRAY3,
            strokeWidth: 1,
            // strokeDasharray: ["0", "0", "0", "0"],
            strokeLinejoin: "round"
         },
         propsForHorizontalLabels: {
            stroke: "transparent",
            fill: COLORS.WHITE,
            fontFamily: 'TomatoGrotesk-Regular'
         },
         propsForVerticalLabels: {
            stroke: "transparent",
            fill: COLORS.WHITE,
            fontFamily: 'TomatoGrotesk-Regular'

         }
      }}
      bezier
   />
)

const dStyle = StyleSheet.create({
   monHolda: {
      width: '95%', marginLeft: 'auto', marginRight: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 5
   },
   moneyRow: {
      height: hp(4), width: wp(15),
      borderRadius: 5, justifyContent: 'center', alignItems: 'center'
   }
})