import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

interface NavigationItemProps {
    link: string,
} 

const NavigationItem: React.FC<NavigationItemProps> = props => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink activeClassName={classes.active} to={props.link}>{props.children} </NavLink> 
        </li>
    );
}

export default NavigationItem;
