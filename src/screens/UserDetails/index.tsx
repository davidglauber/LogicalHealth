import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Linking, Text } from "react-native";
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
import { Button } from "react-native-paper";

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

    ScreenOrientation.addOrientationChangeListener(handleOrientationChange);

    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);

  const addressMaps = `${profile?.address?.street}, ${profile?.address?.city}, ${profile?.address?.state}`;

  return (
    <UserDetailsContainer>
      <UserDetailsImage
        source={{
          uri: profile.avatar
            ? profile.avatar
            : "https://gravatar.com/avatar/8a9a2322a88e07aafa346275c51715aa?s=400&d=mp&r=x",
        }}
      />

      <UserDetailsInfoView
        style={isLandscape && { width: "90%", marginBottom: "7%" }}
      >
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

        <DividerSections />

        <Button
          icon="phone"
          mode="contained-tonal"
          onPress={() => Linking.openURL(`tel:${profile.phoneNumber}`)}
        >
          <Text>Call to {profile.name}</Text>
        </Button>
        <Button
          icon="email"
          mode="contained-tonal"
          onPress={() => Linking.openURL(`mailto:${profile.email}`)}
          style={{ marginTop: 10 }}
        >
          <Text>Email to {profile.name}</Text>
        </Button>

        <Button
          icon="map"
          mode="contained-tonal"
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/search/${encodeURIComponent(
                addressMaps
              )}`
            )
          }
          style={{ marginTop: 10 }}
        >
          <Text>See {profile.name}'s location</Text>
        </Button>
      </UserDetailsInfoView>
    </UserDetailsContainer>
  );
}
