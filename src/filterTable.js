import * as _ from 'underscore';

export default function filterTable(filter, items) {
    if (filter.trim() === '') {
        return items;
    }
    var filter = filter.toLowerCase();
    return _.filter(items, function (item) {
        return item.Name.toLowerCase().indexOf(filter) > -1;
    });
}
