

import { TCard, TQueryParam, TResponseRedux } from "@/types/global.type";
import { baseApi } from "../../api/baseApi";
// import { Tcard } from "@/types/card";

const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 

    getAllCards: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string);
          });
        }

        return {
          url: "/cards",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["card"],
      transformResponse: (response: TResponseRedux<TCard[]>) => {
        return {
          data: response.data,
        };
      },
    }),

    createCard: builder.mutation({
      query: (cardInfo) => ({
        url: "/cards",
        method: "POST",
        body: cardInfo,
      }),
      invalidatesTags: ["card"],
    }),

  

 

    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/cards/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["card"],
    }),

    getSingleCard: builder.query({
      query: (cardTitle) => {
        return {
          url: `/cards/${cardTitle}`,
          method: "Get",
        };
      },
      providesTags: ["card"],
    }),
  }),
});

export const {
useCreateCardMutation,
useGetSingleCardQuery,
useGetAllCardsQuery

} = cardApi;
