import * as React from 'react';
import moment from 'moment';
import * as _ from 'underscore';

export default function DatasetOverview(props) {
    var dataset = props.dataset;

    var objtypes = _.chain(dataset.Attributes)
        .map(function (attribute) {
            return attribute.ObjectType;
        })
        .uniq()
        .value();
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <strong>Id:</strong> {dataset.Id}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <strong>Dataeier:</strong> {dataset.Dataeier}
                </div>
                <div className="col-md-6">
                    <strong>Datatype:</strong> {dataset.Datatype}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <strong>Version:</strong> {moment(dataset.Version).format('DD.MM.YYYY')}
                </div>
                <div className="col-md-6">
                    <strong>Temagruppe:</strong> {dataset.Temagruppe}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <strong>Link:</strong> <a href={dataset.Link}>{dataset.Link}</a>
                </div>
                <div className="col-md-6">
                    <strong>GeoNorgeUuid:</strong> {dataset.GeoNorgeUuid}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <strong>Vedlikehold:</strong>
                    <p>{dataset.Vedlikehold}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <strong>Beskrivelse</strong>
                    <p>{dataset.Opplysninger}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <strong>Datafangstmetode</strong>
                    <p>{dataset.Datafangstmetode}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <strong>Objekttyper</strong>
                    <ul>
                        {_.map(objtypes, function (objtype) {
                            return (<li key={objtype}>{objtype}</li>);
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
