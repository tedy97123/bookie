// // api.ts
//
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GetBookResponse} from './types';
import axios from 'axios';
//
const localURL = 'http://localhost:8005';
// const herokuURL = 'https://acrulifytest-79506d9ff655.herokuapp.com';

function getBooks(title) {
  axios.post(localURL + '/books/goodReads' , );
}
