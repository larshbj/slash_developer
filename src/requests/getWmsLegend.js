import {callWms} from './requestApi';

export default function getWms(callback, dataset) {
    let path = [
                ["layergroup_", dataset].join(""),
                "service=wms",
                "request=GetLegendGraphics",
                "format=image/png",
                "width=20",
                "height=20"
                ].join("&");
    callWms('get', path, null, callback);
}
