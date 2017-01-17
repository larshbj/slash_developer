import * as _ from 'underscore';

export default function filterTable(filter, items) {
    // if (filter.trim() === '') {
    //     return items;
    // }
    // var filter = filter.toLowerCase();
    // return _.filter(items, function (item) {
    //     if (!item.Sokeord) {
    //         return false;
    //     }
    //     let searchWords = item.Sokeord.split(',');
    //     for (let w in searchWords) {
    //         let word = searchWords[w].trim();
    //         if (word.toLowerCase().indexOf(filter) > -1) {
    //             return true;
    //         }
    //     }
    //     return false;
    // });
    var filter = filter.toLowerCase().split(' ');
    if (filter.length < 0) {
        return items;
    }
    console.log(filter);

    return _.filter(items, function (item) {
        if (!item.Sokeord) {
            return false;
        }
        let searchWords = item.Sokeord.split(',');
        return _.every(filter, function (tag) {
            for (let w in searchWords) {
                let word = searchWords[w].trim();
                if (word.toLowerCase().indexOf(tag.trim()) > -1) {
                    return true;
                }
            }
            return false;
        });
    });
}
