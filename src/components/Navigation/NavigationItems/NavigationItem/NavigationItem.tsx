import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

interface NavigationItemProps {
    link: string,
    exact: boolean,
} 

const NavigationItem: React.FC<NavigationItemProps> = props => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink exact={props.exact} activeClassName={classes.active} to={props.link}>{props.children} </NavLink> 
        </li>
    );
}

export default NavigationItem;
