import * as types from './actionTypes';

export const updateArchive = (newData) => ({
  type: types.UPDATE_ARCHIVE_CLAIMS,
  payload: newData
});


export const updateClaims = (newData) => ({
  type: types.UPDATE_ACTIVE_CLAIMS,
  payload: newData
});
