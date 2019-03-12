import React, { Component } from 'react';

//Components
import About from '../components/About'
import Splash from '../components/Splash'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'

class Body extends Component {

    render(){
        return(
            <div>
            <h2> This is the Body</h2>
                <Splash />
                <About />
                <Services />
                <ContactUs />

            </div>
        )
    }
};

export default Body;