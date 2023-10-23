import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import CardUser, { UserInfoInterface } from "../../components/CardUser";
import { HomeContainer, HomeLogo, HomeSnackBar } from "./styles";
import { Searchbar, Snackbar } from "react-native-paper";
import { useGetPersonsQuery } from "../../redux/api";
import { RFValue } from "react-native-responsive-fontsize";

export default function Home() {
  const { data, isLoading } = useGetPersonsQuery({});

  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredData = data?.persons?.filter(
    (item: UserInfoInterface) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address?.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address?.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address?.street?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <HomeContainer>
      <HomeLogo
        source={require("../../assets/img/logoapp.png")}
        resizeMode="contain"
      />

      <Searchbar
        placeholder="Search by using name, city or state"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <FlashList
        data={filteredData}
        renderItem={({ item }: any) => <CardUser dataProfile={item} />}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />

      {isLoading && (
        <HomeSnackBar visible={isLoading} onDismiss={() => {}}>
          Getting Users...
        </HomeSnackBar>
      )}
    </HomeContainer>
  );
}
