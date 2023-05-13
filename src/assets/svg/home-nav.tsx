import React from "react";
import { AppSvgProps } from "../../typings/components";
import Svg, {
   Path, Rect,
} from 'react-native-svg';

export const HomeNavHomeIcon = (props: AppSvgProps) => (
   <Svg width={props.width || "20"} height={props.height || "20"} viewBox="0 0 20 20" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M13.5322 19.1274V16.085C13.5322 14.5097 12.0923 13.2327 10.517 13.2327H10.0824C8.50711 13.2327 7.06712 14.5097 7.06712 16.085V19.1274C7.06712 19.3274 7.10143 19.5194 7.1645 19.6979H5.73606C4.1608 19.6979 2.8838 18.4209 2.8838 16.8456V8.11982L1.54809 9.28857C1.31099 9.49603 0.950604 9.472 0.743141 9.2349C0.535678 8.9978 0.559704 8.63741 0.796804 8.42995L9.92403 0.443616C10.1391 0.255425 10.4602 0.255425 10.6753 0.443616L19.8026 8.42995C20.0397 8.63741 20.0637 8.9978 19.8562 9.2349C19.6488 9.472 19.2884 9.49603 19.0513 9.28857L17.7156 8.11982V16.8456C17.7156 18.4209 16.4386 19.6979 14.8633 19.6979H13.4349C13.4979 19.5194 13.5322 19.3274 13.5322 19.1274Z" fill={props.fill || "#41BCC4"} />
   </Svg>
)


export const HomeNavPlanIcon = (props: AppSvgProps) => (
   <Svg width={props.width || "21"} height={props.height || "22"} viewBox="0 0 21 22" fill="none">
      <Path d="M10.9 12.8909C11.3532 12.8909 11.7965 12.7061 12.3975 12.3562L19.5009 8.30225C20.3975 7.78701 20.8901 7.26204 20.8901 6.44543C20.8901 5.62881 20.3975 5.09412 19.5009 4.5886L12.3975 0.534688C11.7965 0.184711 11.3532 0 10.9 0C10.4369 0 10.0034 0.184711 9.40243 0.534688L2.28913 4.5886C1.39257 5.09412 0.899963 5.62881 0.899963 6.44543C0.899963 7.26204 1.39257 7.78701 2.28913 8.30225L9.40243 12.3562C10.0034 12.7061 10.4369 12.8909 10.9 12.8909ZM10.9 17.5281C11.3433 17.5281 11.7571 17.3336 12.3384 16.9934L19.6783 12.7742C20.4468 12.327 20.9 11.8118 20.9 11.0632C20.9 10.4313 20.5551 9.94521 20.0527 9.58551L11.9542 14.2519C11.5207 14.4949 11.2251 14.6407 10.9 14.6407C10.5748 14.6407 10.2694 14.4949 9.84578 14.2519L1.74725 9.58551C1.23494 9.94521 0.899963 10.4313 0.899963 11.0632C0.899963 11.8118 1.35317 12.3367 2.11179 12.7742L9.45169 16.9934C10.033 17.3336 10.4468 17.5281 10.9 17.5281ZM10.9 22C11.3433 22 11.7571 21.7958 12.3384 21.4653L19.6783 17.2364C20.4369 16.7989 20.9 16.2837 20.9 15.5351C20.9 14.8935 20.5551 14.4074 20.0527 14.0477L11.9542 18.7141C11.5207 18.9669 11.2251 19.1127 10.9 19.1127C10.5748 19.1127 10.2694 18.9669 9.84578 18.7141L1.74725 14.0477C1.23494 14.4074 0.899963 14.8935 0.899963 15.5351C0.899963 16.2837 1.35317 16.7989 2.11179 17.2364L9.45169 21.4653C10.033 21.7958 10.4468 22 10.9 22Z" fill={props.fill || "#94A1AD"} />
   </Svg>
)

export const HomeNavWalletIcon = (props: AppSvgProps) => (
   <Svg width={props.width || "23"} height={props.height || "18"} viewBox="0 0 23 18" fill="none">
      <Path d="M0.5 2.675C0.5 1.61185 1.36185 0.749997 2.425 0.749997H17.275C18.3382 0.749997 19.2 1.61185 19.2 2.675V12.025C19.2 13.0882 18.3382 13.95 17.275 13.95H2.425C1.36185 13.95 0.5 13.0882 0.5 12.025V2.675ZM3.8 2.125V3.225C3.8 3.68063 3.43064 4.05 2.975 4.05H1.875V5.7H2.975C4.34191 5.7 5.45 4.5919 5.45 3.225V2.125H3.8ZM9.85 10.1C11.2169 10.1 12.325 8.9919 12.325 7.625C12.325 6.25809 11.2169 5.15 9.85 5.15C8.4831 5.15 7.375 6.25809 7.375 7.625C7.375 8.9919 8.4831 10.1 9.85 10.1ZM1.875 10.65H2.975C3.43064 10.65 3.8 11.0194 3.8 11.475V12.575H5.45V11.475C5.45 10.1081 4.34191 9 2.975 9H1.875V10.65ZM15.9 11.475C15.9 11.0194 16.2694 10.65 16.725 10.65H17.825V9H16.725C15.3581 9 14.25 10.1081 14.25 11.475V12.575H15.9V11.475ZM15.9 3.225V2.125H14.25V3.225C14.25 4.5919 15.3581 5.7 16.725 5.7H17.825V4.05H16.725C16.2694 4.05 15.9 3.68063 15.9 3.225ZM3.14148 15.6C3.71207 16.5864 4.77854 17.25 6 17.25H17.275C20.1607 17.25 22.5 14.9107 22.5 12.025V6.25C22.5 5.02853 21.8364 3.96206 20.85 3.39148V12.025C20.85 13.9994 19.2494 15.6 17.275 15.6H3.14148Z" fill={props.fill || "#94A1AD"} />
      <Rect x="1.7373" y="1.67822" width="4.02188" height="4.64063" fill={props.fill || "#94A1AD"} />
      <Rect x="14.1123" y="1.67822" width="4.02188" height="4.64063" fill={props.fill || "#94A1AD"} />
      <Rect x="14.1123" y="8.17529" width="4.02188" height="4.64063" fill={props.fill || "#94A1AD"} />
      <Rect x="1.7373" y="8.48437" width="4.02188" height="4.64063" fill={props.fill || "#94A1AD"} />
   </Svg>
)

export const HomeNavFeedIcon = (props: AppSvgProps) => (
   <Svg width={props.width || "23"} height={props.height || "22"} viewBox="0 0 23 22" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M0.0999756 1.5C0.0999756 0.671573 0.771549 0 1.59998 0H20.6C21.4284 0 22.1 0.671573 22.1 1.5V5.5C22.1 6.32843 21.4284 7 20.6 7H1.59998C0.771548 7 0.0999756 6.32843 0.0999756 5.5V1.5ZM0.0999756 11.5C0.0999756 10.6716 0.771549 10 1.59998 10H11.6C12.4284 10 13.1 10.6716 13.1 11.5V20.5C13.1 21.3284 12.4284 22 11.6 22H1.59998C0.771549 22 0.0999756 21.3284 0.0999756 20.5V11.5ZM16.6 10C15.7715 10 15.1 10.6716 15.1 11.5V20.5C15.1 21.3284 15.7715 22 16.6 22H20.6C21.4284 22 22.1 21.3284 22.1 20.5V11.5C22.1 10.6716 21.4284 10 20.6 10H16.6Z" fill={props.fill || "#94A1AD"} />
   </Svg>
)
