import * as React from 'react';
import * as _ from 'underscore';

import filterDatasets from './filterDatasets';

var Filter = React.createClass({

    getDefaultProps: function () {
        return {placeholder: 'Filtrer'};
    },

    getInitialState: function () {
        return {text: ''};
    },

    onChange: function (e) {
        var value = e.target.value;
        this.setState({text: value});
        this.props.onFilter(value);
    },

    render: function () {
        return (
            <div className="form-group has-feedback">
                <input
                    onChange={this.onChange}
                    type="text"
                    value={this.state.text}
                    className="form-control search"
                    autoComplete="off"
                    placeholder={this.props.placeholder} />
                <span className="form-control-feedback">
                   <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </span>
            </div>
        );
    }
});

var FilterableListGroup = React.createClass({

    getInitialState: function () {
        return {filter: ''};
    },

    onFilter: function (filter) {
        this.setState({filter: filter});
    },

    render: function () {
        var props = this.props;
        var items = filterDatasets(this.state.filter, props.items);
        var ItemComponent = props.itemComponent;
        return (
            <div>
                <Filter onFilter={this.onFilter} />
                <div className="list-group">
                    {_.map(items, function (item) {
                        return (
                            <ItemComponent
                                key={item[props.idAttr]}
                                selected={props.selectedItem === item[props.idAttr]}
                                item={item}/>
                        );
                    })}
                </div>
            </div>
        );
    }
});

export default FilterableListGroup;
