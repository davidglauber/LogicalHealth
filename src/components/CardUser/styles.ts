import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CardUserContainer = styled.TouchableOpacity`
    align-items: center;
    margin-vertical: ${RFValue(20)}px;
    padding-horizontal: ${RFValue(10)}px;
    background-color: #ffffff;
    padding-vertical: ${RFValue(20)}px;
    border-radius: ${RFValue(10)}px;
`

export const CardUserTitle = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(26)}px;
`
export const CardUserInfo = styled.View`
    margin-top: ${RFValue(10)}px;
`
export const CardUserSubtitle = styled.Text`
    font-weight: 100;
    font-size: ${RFValue(10)}px;
    align-self: center;
`

export const CardUserFooter = styled.View`
    margin-top: ${RFValue(10)}px;
`
export const CardUserImage = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
    background-color: #f6f6f6;
    padding: ${RFValue(5)}px;
    border-radius: ${RFValue(20)}px;
`