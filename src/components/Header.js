import React from 'react';
import config from '../config.json';

const Header = (props) => {
    return (
        <section className="hero is-info bg-blue">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                    {config.company || "company"}
                </h1>
                <h2 className="subtitle">
                    {config.title || "title"}
                </h2>
                </div>
            </div>
        </section>
    )
};

export default Header;