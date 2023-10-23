import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const HomeContainer = styled(SafeAreaView)`
    flex: 1;
    padding-horizontal: 30px
`

export const HomeLogo = styled.Image`
    max-width: ${RFValue(120)}px;
    max-height: ${RFValue(60)}px;
    align-self: center;
`