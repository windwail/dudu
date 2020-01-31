import * as actions from '../actions/actions';

import fetchData from './helpers/fetchData';
import getDismissalDate from './helpers/getDismissalDate';
import getEmployeePosition from './helpers/getEmployeePosition';
import {getChiefMeetingResult, getChiefPlusMeetingResult} from './helpers/getChiefMeetingResults';

import {archivedClaims} from '../response_archived';


export default function fetchArchivedClaims(chiefId, dispatch) {
  return fetchData(chiefId, true, (data) => {
    let unpackedData = unpackArchiveData(data);
    dispatch(actions.updateArchive(unpackedData));
  });
}


function unpackArchiveData(claimsCollection) {
  return claimsCollection.map((claimItem) => ({
    id: claimItem.id,
    employeeName: claimItem.employee.firstName,
    BSP: claimItem.claimNumber,
    employeePosition: getEmployeePosition(claimItem),
    employeePositionId: claimItem.employee.employeeId,
    dismissalDate: getDismissalDate(claimItem),
    dismissalReason: changeComment(claimItem.claims[0].comment),
    chiefPlusMeetingResult: getChiefPlusMeetingResult(claimItem),
    chiefMeetingResult: getChiefMeetingResult(claimItem),
  }));
}


function changeComment(comment) {
  let newComment = comment.replace('Комментарий:', '');
  newComment = newComment.replace('Причина:', '');
  return newComment.replace('(укажите реальную причину увольнения в комментариях).', '');
}


export function fetchLocalArchived(dispatch) {
  let unpackedData = unpackArchiveData(archivedClaims);
  dispatch(actions.updateArchive(unpackedData));
}