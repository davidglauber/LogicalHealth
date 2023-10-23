import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import CardUser from "../../components/CardUser";
import { HomeContainer, HomeLogo } from "./styles";
import { Searchbar } from "react-native-paper";

const data = [
  {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    avatar:
      "https://gravatar.com/avatar/efda82d74d3c19e1c7b710f548ab3363?s=400&d=robohash&r=x",
    address: { street: "123 Main Street", city: "New York", state: "NY" },
  },
  {
    name: "Jane Smith",
    phoneNumber: "987-654-3210",
    email: "jane.smith@example.com",
    avatar:
      "https://gravatar.com/avatar/9b54a7ade2333f88f661ef1e8d39d4cf?s=400&d=robohash&r=x",
    address: { street: "456 Elm Street", city: "Los Angeles", state: "CA" },
  },
  {
    name: "Bob Johnson",
    phoneNumber: "555-123-4567",
    email: "bob.johnson@example.com",
    avatar: "",
    address: {},
  },
  {
    name: "Alice Brown",
    phoneNumber: "",
    email: "alice.brown@example.com",
    avatar:
      "https://gravatar.com/avatar/672c39d5b10c8814f0bd687e973d0820?s=400&d=robohash&r=x",
    address: { street: "567 Pine Street", city: "San Francisco", state: "CA" },
  },
  {
    name: "David Wilson",
    phoneNumber: "888-777-6666",
    email: "david.wilson@example.com",
    avatar:
      "https://gravatar.com/avatar/c1223000d7d3bb7099ed480aa6c7cdfa?s=400&d=robohash&r=x",
    address: { street: "321 Cedar Street", city: "Miami", state: "FL" },
  },
  {
    name: "Linda Martinez",
    phoneNumber: "777-888-9999",
    email: "linda.martinez@example.com",
    avatar:
      "https://gravatar.com/avatar/edc3a038a6beef253d8c2023cdcce45e?s=400&d=robohash&r=x",
    address: { street: "987 Birch Street", city: "Houston", state: "TX" },
  },
  {
    name: "Michael Davis",
    phoneNumber: "333-555-7777",
    email: "michael.davis@example.com",
    avatar:
      "https://gravatar.com/avatar/5ee5d531e707cf939afb81c80910ed6b?s=400&d=robohash&r=x",
    address: { street: "234 Maple Street", city: "Seattle", state: "WA" },
  },
  {
    name: "Karen White",
    phoneNumber: "111-222-3333",
    email: "karen.white@example.com",
    avatar:
      "https://gravatar.com/avatar/aae86fe04624c8cb654eca618fe509f2?s=400&d=robohash&r=x",
    address: { street: "", city: "Boston", state: "MA" },
  },
  {
    name: "Steven Lee",
    phoneNumber: "444-666-8888",
    email: "steven.lee@example.com",
    avatar:
      "https://gravatar.com/avatar/23e6ec91b00b1931799e15fb29cfabe2?s=400&d=robohash&r=x",
    address: { street: "765 Redwood Street", city: "Dallas", state: "TX" },
  },
  {
    name: "Laura Taylor",
    phoneNumber: "666-999-4444",
    email: "laura.taylor@example.com",
    avatar:
      "https://gravatar.com/avatar/3bff5b3e84b20ad9394f92d563568586?s=400&d=robohash&r=x",
    address: { street: "876 Sequoia Street", city: "Atlanta", state: "GA" },
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredData = data.filter(item =>
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
        renderItem={({ item }) => <CardUser dataProfile={item} />}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </HomeContainer>
  );
}
