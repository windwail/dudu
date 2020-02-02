import jwt from 'jwt-decode';

export default function({token, success, error}) {
    fetch(process.env.REACT_APP_API_URL+"/hello2", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ (token ? token : ""),
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

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