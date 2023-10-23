import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import {
  CardUserContainer,
  CardUserFooter,
  CardUserImage,
  CardUserInfo,
  CardUserSubtitle,
  CardUserTitle,
} from "./styles";

export interface UserInfoInterface {
  name: string;
  phoneNumber: string;
  email: string;
  avatar: string;
  address: { street: string; city: string; state: string } | undefined;
}

interface CardUserInterface {
  dataProfile: UserInfoInterface;
}

type RootStackParamList = {
  UserDetails: {
    dataProfile: UserInfoInterface;
  };
};

type NavigationType = NativeStackNavigationProp<RootStackParamList>;

export default function CardUser({ dataProfile }: CardUserInterface) {
  const { navigate }: NavigationType = useNavigation();

  return (
    <CardUserContainer onPress={() => navigate("UserDetails", { dataProfile })}>
      <CardUserImage
        source={{
          uri: dataProfile.avatar
            ? dataProfile.avatar
            : "https://gravatar.com/avatar/8a9a2322a88e07aafa346275c51715aa?s=400&d=mp&r=x",
        }}
      />

      <CardUserInfo>
        <CardUserTitle>{dataProfile.name ? dataProfile.name : 'Not Informed'}</CardUserTitle>
        <CardUserSubtitle>{dataProfile.phoneNumber ? dataProfile.phoneNumber : 'Not Informed'}</CardUserSubtitle>
      </CardUserInfo>

      <CardUserFooter>
        <Button
          mode="contained-tonal"
          onPress={() => navigate("UserDetails", { dataProfile })}
        >
          <Text>More Details</Text>
        </Button>
      </CardUserFooter>
    </CardUserContainer>
  );
}
