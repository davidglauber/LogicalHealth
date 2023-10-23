import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev-gateway.risk-hr.com/v1/" }),
  refetchOnFocus: true, /* refetchOnFocus refetch always when the app is focused again */
  refetchOnReconnect: true, /* refetchOnReconnect refetch always when the network is connected again */
  endpoints: (builder) => ({
    getPersons: builder.query<any, void>({
      query: () => ({
        url: "health/persons",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPersonsQuery } = api;
