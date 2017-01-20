// import {callWmsLegend} from './requestApi';
//
// export default function getWms(callback, dataset) {
//     let path = [
//                 ["layer=layergroup_", dataset].join(""),
//                 "service=wms",
//                 "request=GetLegendGraphic",
//                 "format=image/png",
//                 "width=20",
//                 "height=20"
//                 // "&legend_options=fontName:Times%20New%20Roman;fontAntiAliasing:true;fontColor:0x000033;fontSize:14;bgColor:0xFFFFEE;dpi:180&APITOKEN=c4546525-f6d1-4db9-950d-bd8d56ce05a2"
//                 ].join("&");
//     callWmsLegend('get', path, null, callback);
// }
