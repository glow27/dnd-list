import { UPDATE_DATA, UPDATE, ADD_LINK, LOAD, LIKE, SHUFFLE, DEL_LINK } from './actionTypes';

export const updateData = (data, topic) => ({
  type: UPDATE_DATA,
  payload: data,
  topic,
});

export const update = (str) => ({
  type: UPDATE,
  payload: str,
});

export const addLink = (data) => ({
  type: ADD_LINK,
  payload: data,
});

export const load = (data) => ({
  type: LOAD,
  payload: data,
});

export const like = (id) => ({
  type: LIKE,
  payload: id,
});

export const delLink = (id) => ({
  type: DEL_LINK,
  payload: id,
});

export const shuffle = (newArr) => ({
  type: SHUFFLE,
  payload: newArr,
});
