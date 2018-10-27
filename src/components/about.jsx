import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-4">
                                Developer. Musician. Tech Geek.
                            </h2>
                            <p className="about-me">
                                I make stuff. I have big ideas. I bring them to life. Whether it be with a computer, with a guitar, or both. I'm happiest when I'm doing what I love and I'm lucky enough to be able to make a career of it. I recently graduated college and started as an Application Developer in my dream city of San Francisco. If you want to talk to me about anything, feel free to contact me.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;