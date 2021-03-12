import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems: React.FC = () => {
    return (
        <nav className={classes.NavigationItems} >
            <ul >
                <NavigationItem link="/about" >ABOUT</NavigationItem>
                <NavigationItem link="/skills" >SKILLS</NavigationItem>
                {/* <NavigationItem link="/work" >WORK</NavigationItem> */}
                <NavigationItem link="/contact" >CONTACT</NavigationItem>
            </ul>
        </nav>
    );
}

export default NavigationItems;
