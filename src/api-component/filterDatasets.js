import * as _ from 'underscore';

export default function filterDatasets(filter, items) {
    if (filter.trim() === '') {
        return items;
    }
    var filter = filter.toLowerCase();
    return _.filter(items, function (item) {
        return item.name.toLowerCase().indexOf(filter) > -1;
    });
}
