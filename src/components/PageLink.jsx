import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    getClassName: function (page) {
        return ["page-link", page].join(" ");
    },

    render() {
        return (
                <div className="post">
                    <Link
                        {...this.props}
                        className={this.getClassName(this.props.page)}/>
                </div>
        );
    }
});
