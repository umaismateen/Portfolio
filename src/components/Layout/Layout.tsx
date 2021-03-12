import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout: React.FC = props => {
    return (
       <div>
           <Toolbar/>
           {props.children}
       </div>
    );
}

export default Layout;
