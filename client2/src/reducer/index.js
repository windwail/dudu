import * as types from '../actions/actionTypes';


export default function(state, action) {
  switch (action.type) {
    case types.UPDATE_ARCHIVE_CLAIMS:
      return reducerOfUpdateArchiveClaims(state, action.payload);
    case types.UPDATE_ACTIVE_CLAIMS:
      return reducerOfUpdateActiveClaims(state, action.payload);
    case types.LOGIN:
      return  {...state, user: action.user};
    case types.LOGOUT:
      return  {...state, user: null};
    default:
      return state;
  }
}


const reducerOfUpdateArchiveClaims = (state, actionPayload) => {
  if (!assertEqualObjects(state.archivedClaims, actionPayload)){
    console.log('acrived claims:', actionPayload);
    return {...state,
      archivedClaims: actionPayload
    }
  } else {
    return state;
  }
}

const reducerOfUpdateActiveClaims = (state, actionPayload) => {
  if (!assertEqualObjects(state.activeClaims, actionPayload)){
    console.log('active claims:', actionPayload);
    return {...state,
      activeClaims: actionPayload
    }
  } else {
    return state;
  }
}


function assertEqualObjects(firstObject, secondObject) {
  if (JSON.stringify(firstObject) === JSON.stringify(secondObject))
    return true;
  else
    return false;
}