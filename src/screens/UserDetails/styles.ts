import { ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const UserDetailsContainer = styled(ScrollView).attrs({
        contentContainerStyle: {
            alignItems: 'center'
        }
    })`
    flex: 1;
    background-color: #ffffff;
    padding-vertical: 30px;
`

export const UserDetailsImage = styled.Image`
    width: ${RFValue(150)}px;
    height: ${RFValue(150)}px;
    background-color: #ffffff;
    padding: ${RFValue(5)}px;
    border-radius: ${RFValue(20)}px;
`

export const UserDetailsInfoView = styled.View`
    background-color: #f6f6f6;
    width: ${RFValue(290)}px;
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(15)}px;
`

export const UserDetailsName = styled.Text`
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(10)}px;

`
export const UserDetailsTitle = styled.Text`
    font-size: ${RFValue(24)}px;
`

export const UserDetailsGenericText = styled.Text`
    font-size: ${RFValue(14)}px;
`

export const DividerSections = styled(Divider)`
    margin-vertical: ${RFValue(10)}px;
`