import NavBar from '../../Components/NavBar/NavBar'
import ScrollHighlightNav from '../../Components/NavBar/ScrollHighlightNav'
import React from 'react';

const Header = (props) => {

    return (
        /*<NavBar />*/
        <ScrollHighlightNav links={props.links} />
    );
}

export default Header;
