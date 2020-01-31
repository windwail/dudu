export default function(dispatch) {
  fetch(process.env.REACT_APP_API_URL+"/activities")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(json => {
      dispatch(unpackActivities(json));
    })
}


function unpackActivities(packedActivities) {
  let unpackedActivities = [];
  
  for (let activityItem of packedActivities) {
    unpackedActivities.push({
      ...activityItem, 
      checked: false
    });
  }

  return unpackedActivities;
}