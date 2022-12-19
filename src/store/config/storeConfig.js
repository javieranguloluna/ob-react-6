import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
            sagaMiddleware,
            composeWithDevTools
        ])
    });
    sagaMiddleware.run(watcherSaga);

    return store;
}