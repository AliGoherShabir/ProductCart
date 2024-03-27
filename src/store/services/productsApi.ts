import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types";
import { getSecureURL } from "../utils";

export const productApi = createApi({
  reducerPath: "products",
  tagTypes: ["products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/benirvingplt/products",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: ["products"],
      transformResponse: (res: Product[]) => res.map(i => ({...i, img: getSecureURL(i.img)})),
    }),
    // postProduct: builder.mutation({
    //   query: (data) => ({
    //     url: "/products",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["products"],
    // }),
    // updateProduct: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/products/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["products"],
    // }),
    // deleteProduct: builder.mutation({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["products"],
    // }),
  }),
  refetchOnFocus: true,
});

export const {
  useGetAllProductsQuery,
  //   usePostProductMutation,
  //   useUpdateProductMutation,
  //   useDeleteProductMutation,
} = productApi;
