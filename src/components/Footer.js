import React from 'react';

const Footer = () => {
    return (
        <div className="row">
            <div className="col py-2 mt-3 bg-warning text-danger text-center">
                <h3>Guess That Flag</h3>
                <p>Copyright of {' '}
                    <span>
                        <a href="https://github.com/tdo94" className="text-success">Trang Do</a>
                    </span>
                    {' '} &copy; 2018</p>
            </div>
        </div>
    )
}

export default Footer;