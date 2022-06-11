// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistStore,
//   persistReducer,
// } from 'redux-persist';
// import todosReducer from './todos-reducer';
// import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const todosPersistConfig = {
//   key: 'todos',
//   storage,
//   blacklist: ['filter'],
// };

// export const store = configureStore({
//   reducer: {
//     todos: persistReducer(todosPersistConfig, todosReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

// // export default { store, persistor };
