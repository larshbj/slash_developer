import callApi from './requestApi';

export default function getDataset(callback, datasetId) {
    callApi('get', '/datasets/' + datasetId, null, callback);
}
