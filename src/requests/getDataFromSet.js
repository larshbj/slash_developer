import callApi from './requestApi';

export default function getDataset(callback, datasetId) {
    callApi('get', '/datasets/' + datasetId +
            '/features/attributequery?AttributeKey=fylkesnr&AttributeValue=16&SRS=4326',
            null, callback);
}
