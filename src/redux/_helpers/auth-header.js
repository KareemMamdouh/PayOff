// import Cookies from "js-cookie";
export function authHeaderAPI() {
    // return authorization header with jwt token
    return {
        'APISignature': 'Basic aW5tZW1vZjppbm1lbW9mQCE='
    };
}
export function authHeader() {
    // return authorization header with jwt token
    // let user = Cookies.getJSON('user');
    let user;
    if (user && user.access_token) {
        return {
            'Authorization': 'Bearer ' + user.access_token,
            'APISignature': 'Basic aW5tZW1vZjppbm1lbW9mQCE='
        };
    } else {
        return {};
    }
}
export function authHeaderWithFD() {
    // return authorization header with jwt token
    // let user = Cookies.getJSON('user');
    let user;
    if (user && user.access_token) {
        return {
            'Authorization': 'Bearer ' + user.access_token,
            'Content-Type': 'multipart/form-data',
            'APISignature': 'Basic aW5tZW1vZjppbm1lbW9mQCE='
        };
    } else {
        return {};
    }
}