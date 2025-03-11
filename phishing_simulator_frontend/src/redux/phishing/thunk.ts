import { PhishingListDto } from './types';
import { disableGlobalLoadingOption } from '../common/thunk';
import { createAsyncThunk } from "@reduxjs/toolkit"
import phishingApi from '../api/phishingApi';

interface FetchAllPhishingsType {
  authToken: string
}

interface SendPhishingEmailType extends FetchAllPhishingsType {
  email: string
}

export const fetchAllPhishingsThunk = createAsyncThunk(
    'phishing/fetchAllPhishingsThunk',
    async ({ authToken }: FetchAllPhishingsType): Promise<PhishingListDto[]> => {
      const response = await phishingApi.getAllPhishingsApi(authToken);

      return response.data
    }
)

export const sendPhishingEmailThunk = createAsyncThunk(
  'phishing/sendPhishingEmailThunk',
  async ({ authToken, email }: SendPhishingEmailType): Promise<PhishingListDto> => {
    try {
      const response = await phishingApi.sendPhishingEmailApi(authToken, email);

      return response.data
    } catch(err) {
      throw new Error(err?.response?.data?.message);
    }
   
  },
  disableGlobalLoadingOption
)
