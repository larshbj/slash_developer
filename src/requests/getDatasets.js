import {callApi} from './requestApi';

export default function getDatasets(callback) {
    callApi('get', '/datasets/', null, callback);
}
