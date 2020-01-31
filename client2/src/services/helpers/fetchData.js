export default function(chiefId, isArchive, dispatcher) {
  fetch(`${process.env.REACT_APP_API_URL}/todo/${chiefId}/${isArchive}`)
    .then(respond => {
      if (respond.ok) {
        return respond.json();
      } else {
        respond.error();
      }
    })
    .then(respond => {
      dispatcher(respond);
    })
    .catch(error => {
      console.log('error: ', error);
    });
}
