import { Action, configureStore } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'

import rootReducer from './reducer'

enableMapSet()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface IAction<P> extends Action<string> {
  payload: P
}

export interface ActonForExtraReducers<T> extends IAction<T> {
  meta: {
    arg: T
    requestId: string
    requestStatus: 'pending' | 'fulfilled' | 'rejected'
    shouldNotLoad?: boolean;
  }
}

type SliceReducer<S, A> = (s: S, action: A) => any | ((s: S) => any)
export interface SliceReducers<S> {
  [key: string]: SliceReducer<S, IAction<any>>
}
