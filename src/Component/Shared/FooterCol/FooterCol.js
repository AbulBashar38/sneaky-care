import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="text-white fw-bold text-uppercase">{props.title}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.footerItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary text-white">{item.name}</Link></li>)
                }
                {props.children && props.children}
            </ul>
        </div>
    );
};

export default FooterCol;