import * as _ from 'underscore';

export default function filterTable(filter, items) {
    // if (filter.trim() === '') {
    //     return items;
    // }
    // var filter = filter.toLowerCase();
    var filter = filter.toLowerCase().split(' ');
    if (filter.length < 0) {
        return items;
    }
    return _.filter(items, function (item) {
        return _.every(filter, function (tag) {
            var hit = item.Name.toLowerCase().indexOf(tag.trim()) > -1;
            if (!hit && item.Sokeord) {
                hit = hit || item.Sokeord.toLowerCase().indexOf(tag.trim()) > -1;
            }
            if (!hit && item.Opplysninger) {
                hit = hit || item.Opplysninger.toLowerCase().indexOf(tag.trim()) > -1;
            }

            return hit;
        });
        // var hit = item.Name.toLowerCase().indexOf(filter) > -1;

        // if (!hit && item.Sokeord) {
        //     hit = hit || item.Sokeord.toLowerCase().indexOf(filter) > -1;
        // }
        // if (!hit && item.Opplysninger) {
        //     hit = hit || item.Opplysninger.toLowerCase().indexOf(filter) > -1;
        // }

        // return hit;
    });


}
