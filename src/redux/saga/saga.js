import { put, takeLatest, all, call, select } from 'redux-saga/effects';

import { updateData, addLink } from '../actionCreators';

import { UPDATE } from '../actionTypes';

const updateDataFetch = async function (str) {
  const response = await fetch(`https://www.reddit.com/r/${str}.json`);

  const data = await response.json();

  return data.data.children;
};

function* updateDataWorker(obj) {
  const topic = yield select((state) => state[obj.payload]);
  if (topic.length === 0) {
    const data = yield call(updateDataFetch, obj.payload);
    yield put(updateData(data, obj.payload));
  }
  yield put(addLink(obj.payload));
}

function* actionWatcher() {
  yield takeLatest(UPDATE, updateDataWorker);
}

export function* mySaga() {
  yield all([actionWatcher()]);
}
