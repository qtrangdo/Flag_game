import React from 'react';

const Header = () => {
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

export default Header;