export default function(interviewData) {
  fetch(process.env.REACT_APP_API_URL+"/commitInterview", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(interviewData), // тип данных в body должен соответвовать значению заголовка "Content-Type"
  })
    .then(respond => {
      if (respond.ok) {
          return respond.json();
      }
    })
    .then(respond => {
        console.log(respond);
    })
    .catch(error => {
        console.log(error);
    });
}