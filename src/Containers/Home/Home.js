import Hero from '../../Components/Hero/Hero';
import React from 'react';

const Home = React.forwardRef((props, ref) => {
    return (
        <Hero ref={ref} />
    );
})

export default Home;