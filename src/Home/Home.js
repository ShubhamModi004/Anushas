import React, { Component } from 'react'
import Sidebar from '../Globals/Sidebar'
import { Link } from 'gatsby';

import Fade from 'react-reveal/Fade';

import Background from './Background';
// import css
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="conta">
                    <div className="landing">
                            <div className="container">
                                <div className="logo">
                                    <Background/>
                                </div>
                            </div>
                    </div>


                    <div className="container-fluid content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <Link className="nav-link" to="/about">
                                <div className="about wow fadeIn">
                                    <div className="dark-overlay"></div>
                                    <div className="containertag">
                                        ABOUT ME
                                        <br/>
                                        <span>Who am I and my story</span>   
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-6">
                            <Link className="nav-link" to="/portfolio">
                            <div className="designs wow fadeIn">
                                <div className="dark-overlay"></div>
                                    <div className="containertag">
                                        DESIGNS
                                        <br/>
                                        <span>Take a look at my products</span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <Link className="nav-link" to="/contact">
                                <div className="contact wow fadeIn">
                                    <div className="dark-overlay"></div>
                                    <div className="containertag">
                                        CONTACT
                                        <br/>
                                        <span>Ping me for enquiries.</span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="container wow fadeInUp">
                        <h5>My WAY OF LIFE</h5>
                        <div className="living wow fadeInUp">
                            <p>Ensembles mixed with charm, contemporary cuts and silhouettes I have a penchant for well finished craftsmanship. And ready for you!</p>
                        </div>
                    </div>



                    <div className="container blog">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 mt-5 main">
                                <h1>Latest From My Blog</h1>
                                <div className="container latest_blog">

                                </div>
                                <div className="wrapper">
                                    
                                </div>
                            </div>



                            <div className="col-sm-12 col-md-12 col-lg-4 order-2 sticky-sidebar">
                                <Sidebar/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Home;
