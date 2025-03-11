import userApi from 'src/redux/api/userApi'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RegisterParams } from 'src/@core/context/types'
import { MessageDto } from 'src/types/message.dto'
import { StatusEnum } from 'src/types/enums/status.enum'

export type ForgotPasswordThunkType = {
  email: string
}

export type FetchUserCompanyThunkType = {
  companyId: string
  authToken: string | null
}

export type DeleteUserThunkType = {
  id: string
  body: {
    status: StatusEnum
  }
  authToken: string | null
}

export const registerUserThunk = createAsyncThunk(
  'user/registerUserThunk',
  async (body: RegisterParams): Promise<MessageDto> => {
    try {
      const response = await userApi.registerUserApi(body)

      return response.data
    } catch (err: any) {
      throw err?.response?.data
    }
  }
)