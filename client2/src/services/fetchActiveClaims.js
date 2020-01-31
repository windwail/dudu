import * as actions from '../actions/actions';

import fetchData from './helpers/fetchData';
import getMeetingDeadline from './helpers/getMeetingDeadline';
import getDismissalDate from './helpers/getDismissalDate';
import getEmployeePosition from './helpers/getEmployeePosition';
import {getChiefMeetingResult, getChiefPlusMeetingResult} from './helpers/getChiefMeetingResults';

import {activeClaims} from '../response_active';


export default function fetchActiveClaims(chiefId, dispatch) {
  return fetchData(chiefId, false, (data) => {
    let unpackedData = unpackActiveData(data, chiefId);
    dispatch(actions.updateClaims(unpackedData));
  });
}


function unpackActiveData(claimsCollection, chiefId) {
  return claimsCollection.map((claimItem) => ({
    id: claimItem.id,
    employeeName: claimItem.employee.firstName,
    BSP: claimItem.claimNumber,
    employeePosition: getEmployeePosition(claimItem),
    employeePositionId: claimItem.employee.employeeId,
    dismissalDate: getDismissalDate(claimItem),
    meetingDeadline: getMeetingDeadline(claimItem),
    chiefPlusMeetingResult: getChiefPlusMeetingResult(claimItem),
    chiefMeetingResult: getChiefMeetingResult(claimItem),
    todo: getTodo(claimItem, chiefId),
  }));
}


function getTodo(claimItem, chiefId) {
  return claimItem.tasks.find(task => {
    return task.active && Number(task.chief.id) === Number(chiefId);
  });
}


export function fetchLocalActive(chiefId, dispatch) {
  let unpackedData = unpackActiveData(activeClaims, chiefId);
  dispatch(actions.updateClaims(unpackedData));
}