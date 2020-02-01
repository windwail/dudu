import jwt from 'jwt-decode';

export default function({username, password, email, success, error}, dispatch) {
    fetch(process.env.REACT_APP_API_URL+"/register", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({password, username, email}), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
        .then(response => {
            // reject not ok response
            if (!response.ok) {
                return Promise.reject(response)
            }
            return response.json() // or return response.text()
        })
        // catch error response and extract the error message
        .catch(async response => {
            const error = await response.text().then(text => text)
            return Promise.reject(error)
        })
        .then(data => {
            // you've got your data here
            console.log(data);
            success(data);
        })
        .catch(errorMessage => {
            // finally handle the error
            error("Cant register this user.");

        })
}