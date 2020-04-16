import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import { API_KEY, API_TOKEN } from '../config';

const key = API_KEY;
const token = API_TOKEN;

// GET ALL BOARD

function* getAllBoard() {
  console.log('board');

  const url = `https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`;

  const json = yield fetch(url, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  });
  yield put({ type: 'BOARD_DATA', json });
}

function* actionWatcher1() {
  yield takeLatest('GET_BOARD', getAllBoard);
}

// GET ALL LIST AND CARDS

function* getAllList(data) {
  const idBoard = data.boardID;
  console.log('gel');
  const url = `https://api.trello.com/1/boards/${idBoard}/lists?cards=all&key=${key}&token=${token}`;

  const json = yield fetch(url, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  });
  yield put({ type: 'LIST_DATA', json });
}

function* actionWatcher2() {
  yield takeLatest('GET_LIST', getAllList);
}

// GET ALL CHECKLIST OF CARD

function* getAllChecklist(data) {
  const cardID = data.id;
  console.log('card', cardID);
  const url = `https://api.trello.com/1/cards/${cardID}/checklists?checkItems=all&key=${key}&token=${token}`;
  console.log(url);
  const json = yield fetch(url, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  });
  console.log(json);
  yield put({ type: 'CHECKLIST_DATA', json });
}

function* actionWatcher3() {
  yield takeLatest('GET_CHECKLIST', getAllChecklist);
}

export default function* rootSaga() {
  yield all([fork(actionWatcher1), fork(actionWatcher2), fork(actionWatcher3)]);
}
