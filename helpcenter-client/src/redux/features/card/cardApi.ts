/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const CardsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCards: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: [tagTypes.card],
    }),

    addCards: build.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.card],
    }),
  }),
});

export const { useGetCardsQuery, useAddCardsMutation } = CardsApi;
