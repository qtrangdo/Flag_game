import React from 'react';
import Proptypes from 'prop-types';

const Header = props => {
    const { branding } = props
    return (
        <div className="row">
            <div className="col py-5 mb-3 bg-warning text-danger text-center">
                <h1>
                    <i className="fas fa-flag mr-3"/>
                    <strong>Guess The Flag!</strong>
                </h1>
            </div>
        </div>
    )
}

Header.defaultProps = {
    branding: "My App"
}

Header.propTypes = {
    branding: Proptypes.string.isRequired
}

export default Header;