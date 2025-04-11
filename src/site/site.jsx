import React from 'react';
import Menu from './Components/menu';
import Banner from './Components/banner';
import Features from './Components/features';
import Testimony from './Components/testimony';
import Prices from './Components/prices';

import Footer from './Components/footer';


function Site(){
    return <>
        <Menu  />
        <Banner />
        <Features />
        <Testimony/>
        <Prices />
        <Footer />
    </>;
}

export default Site;