import React from 'react';
import './styles.css';

//interface Props {}

const Footer: React.FC = () => {
    return (
        <footer className={'footer'}>
            <h6 className="text">
                Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
                Versandkosten.
            </h6>
        </footer>
    );
};

export default Footer;
