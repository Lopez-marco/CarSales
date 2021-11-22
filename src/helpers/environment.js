let APIURL = '';
switch (window.location.hostname) {
    // this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
        // this is the local host name of your API
        APIURL = 'http://localhost:3000';
        break;
    // this is the deployed react application
    case '6193f50fec227251d6ff162e--clever-curran-ffbad0.netlify.app':
        // this is the full url of your deployed API
        APIURL = 'https://car-sales-server.herokuapp.com/'
}
export default APIURL;