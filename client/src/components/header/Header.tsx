import React from 'react';
import './styles.css';

const Header: React.FC = () => {
    return (
        <header className={'header'}>
            <section className="header__innersection">
                <a className="header__innersection__logocontainer">
                    <img
                        src="https://getlogo.net/wp-content/uploads/2020/11/home24-logo-vector.png"
                        className="header__logo"
                    />
                </a>
                <section className="header__innersection__searchcontainer">
                    <input placeholder={'Search'} />
                </section>
            </section>
        </header>
    );
};
export default Header;
