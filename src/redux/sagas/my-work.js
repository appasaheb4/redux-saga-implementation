import {put} from 'redux-saga/effects';
import {createWatcher} from '../utils/utilities';

import {FETCH_WORK_LIST, setWorkListAction} from '../actions/my-work';

function* fetchMyWorkListWorker({payload}) {
  const response = yield fetch('http://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((res) => {
      console.log({res});
      return res;
    });
  yield put(setWorkListAction(response));
}

export const fetchMyWorkListWatcher = createWatcher(
  fetchMyWorkListWorker,
  FETCH_WORK_LIST
);
