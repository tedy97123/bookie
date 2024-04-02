// // api.ts
//
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
   GetBookResponse,
 } from './types';
//
const localURL = 'http://localhost:8005';
// const herokuURL = 'https://acrulifytest-79506d9ff655.herokuapp.com';

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: localURL}),
  reducerPath: 'api',
  tagTypes: ['GetBooks', 'GetBooksByCategory', 'GetBookSales', 'GetAccess'],
  endpoints: build => ({
    postBookTitle: build.mutation<Array<GetBookResponse>, any>({
      query: title => ({
        url: '/books/goodReads',
        method: 'POST',
        body: title,
      }),
      invalidatesTags: ['GetBooks'],
    }),
  }),
});

export const {usePostBookTitleMutation} = api;
