import React from 'react';

const Header = () => {
    return (
        <div className="row">
            <div className="col py-4 mb-3 bg-warning text-danger text-center">
                <h1>
                    <i className="fas fa-flag mr-3"/>
                    <strong>Guess That Flag!</strong>
                </h1>
                <h4 className="text-success">You have 5 chances. Go!</h4>
            </div>
        </div>
    )
}

export default Header;