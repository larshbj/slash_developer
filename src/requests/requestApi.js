import reqwest from 'reqwest';
import {key} from './key.js';

var BASE_URL = '//www.webatlas.no/WAAPI-Datavarehus';

export default function callApi(method, path, data, callback) {
    var headers = {
        'X-WAAPI-Token': key,
        'Accept': 'application/json; charset=utf-8'
    };
    reqwest({
        url: BASE_URL + path,
        crossOrigin: true,
        type: 'json',
        method: method,
        contentType: 'application/json; charset=utf-8',
        headers: headers,
        data: data,
        error: function (err) {
            try {
                callback(JSON.parse(err.response));
            } catch (e) {
                callback(err);
            }
        },
        success: function (resp) {
            callback(null, resp);
        }
    });
}

export function callWms(method, path, callback) {
    let BASE_URL = '//:http://waapi.webatlas.no';
    var headers = {
        'APITOKEN': key
    };
    reqwest({
        url: BASE_URL + path,
        crossOrigin: true,
        type: 'xml',
        method: method,
        contentType: 'text/xml; charset=utf-8',
        headers: headers,
        data: data,
        error: function (err) {
            try {
                callback(JSON.parse(err.response));
            } catch (e) {
                callback(err);
            }
        },
        success: function (resp) {
            callback(null, resp);
        }
    });
}
