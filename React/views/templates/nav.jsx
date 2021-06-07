const React = require('react');
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function nav(props) {
    let navNames = props.navNames;
    let navURLS = props.navURLS;
    let current = props.current;
    return (
        <ul>
            {navNames.map((value, index) => {
                if (value === current){
                    return <li key={index}><a className={"nav-text active"} href={navURLS[index]}>{value}</a></li>
                } else {
                    return <li key={index}><a className={"nav-text"} href={navURLS[index]}>{value}</a></li>
                }
            })}
        </ul>
    )
}

module.exports = nav;