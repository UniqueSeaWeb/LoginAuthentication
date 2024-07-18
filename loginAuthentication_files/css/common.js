/** 画面共通JavaScript **/
// GASのウェブアプリURL
var WEBAPPURL = 'https://script.google.com/macros/s/AKfycbwuY3rui2stn9OvG4aVYSuZqQMQYa9TrAfHVJX1byXFSfhwWU3uclpYFQ37jsPzpdM/exec';

// 通信タイムアウト値
var TIMEOUT = 10000;

function setParams(url, params) {
    let output = url;
    const paramsObj = new Object(params);

    if (Object.keys(paramsObj).length == 0) {
        return;
    }

    for (let i = 0; i < Object.keys(paramsObj).length; i++) {
        if (i == 0) {
            output += '?';
        } else {
            output += '&';
        }
        output += Object.keys(paramsObj)[i] + '=' + Object.values(paramsObj);
    }

    return output;
}