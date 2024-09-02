import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, OMDB_API_KEY } from "../../constant";

// Define a service using a base URL and expected endpoints
export const ActionsApi = createApi({
  reducerPath: "ationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getActionMovies: builder.query({
      query: () => `?s=action&type=movie&apikey=${OMDB_API_KEY}`,
    }),

    getComedyMovies: builder.query({
      query: () => `?s=comedy&type=movie&apikey=${OMDB_API_KEY}`,
    }),

    getDramaMovies: builder.query({
      query: () => `?s=drama&type=movie&apikey=${OMDB_API_KEY}`,
    }),

    getHorrorMovies: builder.query({
      query: () => `?s=horror&type=movie&apikey=${OMDB_API_KEY}`,
    }),

    getAdventureMovies: builder.query({
      query: () => `?s=adventure&type=movie&apikey=${OMDB_API_KEY}`,
    }),

    getSearchMovies: builder.mutation({
      query: (searchValue: string) => ({
        url: `?s=${searchValue}&apikey=${OMDB_API_KEY}`,
        method: "GET",
      }), 
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetActionMoviesQuery,
  useGetComedyMoviesQuery,
  useGetDramaMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetAdventureMoviesQuery,
  useGetSearchMoviesMutation,
} = ActionsApi;
