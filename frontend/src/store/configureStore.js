import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import keyReducer from './selectedKeySlice'
import breakpointReducer from './breakpointSlice'

const rootReducer = combineReducers({ key: keyReducer, breakpoint: breakpointReducer })

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store;
