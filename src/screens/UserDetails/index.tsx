import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import {
  DividerSections,
  UserDetailsContainer,
  UserDetailsGenericText,
  UserDetailsImage,
  UserDetailsInfoView,
  UserDetailsName,
  UserDetailsTitle,
} from "./styles";
import * as ScreenOrientation from "expo-screen-orientation";

export default function UserDetails() {
  const { params }: any = useRoute();
  const profile = params?.dataProfile;
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  

  useEffect(() => {
    console.log("PARAMS: " + JSON.stringify(params));

    const handleOrientationChange = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      if (orientation === 3 || orientation === 4) {
        setIsLandscape(true);
      } else {
        setIsLandscape(false);
      }
    };

    ScreenOrientation.addOrientationChangeListener(handleOrientationChange)

    return () => {
      ScreenOrientation.removeOrientationChangeListeners()
    }
  }, []);

  return (
    <UserDetailsContainer>
      <UserDetailsImage
        source={{
          uri: profile.avatar
            ? profile.avatar
            : "https://gravatar.com/avatar/8a9a2322a88e07aafa346275c51715aa?s=400&d=mp&r=x",
        }}
      />

      <UserDetailsInfoView style={isLandscape && {width: '90%', marginBottom: '7%'}}>
        <UserDetailsTitle>User Information</UserDetailsTitle>
        <DividerSections />
        <UserDetailsName>{profile.name}</UserDetailsName>
        <UserDetailsGenericText>{profile.phoneNumber}</UserDetailsGenericText>
        <UserDetailsGenericText>{profile.email}</UserDetailsGenericText>
        <DividerSections />

        {profile.address ? (
          <>
            <UserDetailsGenericText>
              {profile.address.street}
            </UserDetailsGenericText>
            <UserDetailsGenericText>
              {profile.address.city}
            </UserDetailsGenericText>
            <UserDetailsGenericText>
              {profile.address.state}
            </UserDetailsGenericText>
          </>
        ) : (
          <Text>Address is empty</Text>
        )}
      </UserDetailsInfoView>
    </UserDetailsContainer>
  );
}
