import {callWMS} from './requestApi';

export default function getDataset(callback, service) {
    let path = '' + service + '?service=wms&request=getCapabilities';
    callWMS('get', path, callback);
}
