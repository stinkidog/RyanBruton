import ScrollHighlightNav from '../../Components/NavBar/ScrollHighlightNav'
import React from 'react';

const Header = (props) => {

    return (
        <ScrollHighlightNav links={props.links} />
    );
}

export default Header;
