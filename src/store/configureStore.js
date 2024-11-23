import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers/index.js'; 

const reducers = createRootReducer();

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true, // Activa Redux DevTools
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER],
        },
      }).concat(thunk),  // Usa thunk para manejar acciones asíncronas
});



export const persistor = persistStore(store);