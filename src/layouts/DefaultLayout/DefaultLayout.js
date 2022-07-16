import PropTypes from 'prop-types';
import React from "react";

function DefaultLayout({ children }) {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;