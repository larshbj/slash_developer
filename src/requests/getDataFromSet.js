import callApi from './requestApi';

export default function getDataset(callback, datasetId, attributeKey,
    attributeValue) {
    let path = '/datasets/' + datasetId +
            '/features/attributequery?AttributeKey=' + attributeKey + 
            '&AttributeValue=' + attributeValue;
    callApi('get', path, null, callback);
}
