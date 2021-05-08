/* importing */
import axios from "axios"


/* for GET request */
export const getRequest = (url) => {
    return new Promise(resolve => {
        let header = {headers: {}}
        let token = localStorage.getItem("token")
        if (token) {
            header.headers['Authorization'] = 'token ' + token
        }
        let baseURL = "http://www.dushanbe.apis.lp-report.com/api/"
        axios.get(baseURL + url, {
            headers: {Authorization: `token ${token}`},
        }).then(response => {
            resolve(response.data)
        }).catch(errors => {
            console.log(errors)
            resolve(false)
        })
    })
}


/* for POST request */
export const postRequest = function (url, data = {}) {
    return new Promise((resolve) => {
        let header = {headers: {}}
        let token = localStorage.getItem("token") ;
        if (token) {
            header.headers['Authorization'] = `token ${token}`
        }
        let baseURL = "http://www.dushanbe.apis.lp-report.com/api/"
        axios.post(baseURL + url,
            data,
            header
        ).then(response => {
            resolve(response.data)
        }).catch(errors => {
            console.log(errors)
            resolve(false)
        })
    })
}

