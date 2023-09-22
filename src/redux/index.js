import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {call, all, spawn} from 'redux-saga/effects';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import myWorkReducer from './reducers/my-work';

// sagas
import {fetchMyWorkListWatcher} from './sagas/my-work';

const config = {
  key: 'root',
  storage,
};

// rootSaga
const rootSaga = function* () {
  const sagas = [fetchMyWorkListWatcher];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            console.log({error});
          }
        }
      })
    )
  );
};

// rootReducer
const rootReducer = combineReducers({
  myWork: myWorkReducer,
});

export default function makeStore() {
  const sagaMiddleware = createSagaMiddleware();
  const reducers = persistReducer(config, rootReducer);
  const storeMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(reducers, storeMiddleware);
  persistStore(store);
  sagaMiddleware.run(rootSaga);
  return store;
}
