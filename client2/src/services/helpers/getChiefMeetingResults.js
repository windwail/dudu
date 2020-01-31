export function getChiefMeetingResult(claimItem) {
  let chiefMeetingResults = {};

  claimItem.tasks.forEach((task) => {
    if (task.type === 'CHIEF' && task.results.length !== 0) {
      chiefMeetingResults.comments = getComments(task);
      chiefMeetingResults.plannedActivities = getPlannedActivities(task);
      chiefMeetingResults.solution = getMeetingSolution(task)[0];
    }
  });

  return chiefMeetingResults;
}


export function getChiefPlusMeetingResult(claimItem) {
  let chiefPlusMeetingResults = {};
  
  claimItem.tasks.forEach((task) => {
    if (task.type === 'CHIEFPLUS' && task.results.length !== 0) {
      chiefPlusMeetingResults.comments = getComments(task);
      chiefPlusMeetingResults.plannedActivities = getPlannedActivities(task);
      chiefPlusMeetingResults.solution = getMeetingSolution(task)[0];
    }
  });

  return chiefPlusMeetingResults;
}


function getComments(task) {
  let comments = [];

  task.results.forEach(result => {
    comments.push(result.comment);
  })

  return comments;
}

function getPlannedActivities(task) {
  let activities = [];

  task.results.forEach(result => {
    result.plannedActivities.forEach(activity => {
      activities.push(activity.name);
    })
  });

  return activities;
}

function getMeetingSolution(task) {
  let meetingSolutions = [];
  
  meetingSolutions = task.results.map(resultCollectionItem => {
    return translateSolution(resultCollectionItem.result);
  });

  return meetingSolutions;
}


function translateSolution(solution) {
  switch (solution) {
    case 'CANT_HOLD':
      return 'Подтвердил решение об увольнении';
    case 'POSTPONED':
      return 'Взял время обдумать решение';
    case 'NOT_APPROPRIATE':
      return 'Удержание не целесообразно';
    case 'HOLDED':
      return 'Продолжить работу в Сбербанке';
    default:
      return '';
  }
}