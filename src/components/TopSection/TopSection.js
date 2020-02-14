import React, { Component } from 'react'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'

//Images
import formLogo from './images/ice-logo.svg'
import symantec from './images/symantec.png'
import mcafee from './images/mcafee.png'
import veriSign from './images/verisign.png'
import sslTrust from './images/ssl.png'
import geoTrust from './images/geotrust.png'
import secure from './images/secure.svg'
import bluePlus from './images/plus-blue.svg'
import greenPlus from './images/plus-green.svg'

//Videos
import en_1 from './en_1.mp4'

export default class TopSection extends Component {
    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className='TopSection'>

                <Header languageManager={this.props.languageManager}/>

                <div className="main-banner">
                    <div className="container">
                        <h1>
                            {languageManager.title}
                        </h1>
                        <div className="wrapper-flex">

                            <div className="video-wrapper">
                                <VideoPlayer link={en_1} {...this.props}  />
                            </div>

                            <div className="form-container">
                                <div className="formHeader">
                                    <img src={formLogo} alt=""/>
                                </div>
                                <Regform {...this.props} />
                            </div>

                        </div>
                        <div className="partners">
                            <img src={symantec} alt=""/>
                            <img src={mcafee} alt=""/>
                            <img src={veriSign} alt=""/>
                            <img src={sslTrust} alt=""/>
                            <img src={geoTrust} alt=""/>
                            <img src={secure} alt=""/>
                        </div>
                        <h4 className="motivation">
                            {languageManager.motivation_title}
                        </h4>
                    </div>
                </div>

                <div className="artificial-intelligance">
                    <div className="container">
                        <h3>
                            {languageManager.artificial_intelligance}
                        </h3>
                    </div>
                    <div className="banner">
                        <div className="container">
                            <div className="text-zone">
                                <ul>
                                    <li>
                                        <span className="currency">
                                            BTC
                                        </span>
                                        <span className="value">
                                            + 90.60123
                                        </span>
                                        <span className="plus">
                                            <img src={bluePlus} alt=""/>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="currency">
                                            ETH
                                        </span>
                                        <span className="value">
                                            + 90.60123
                                        </span>
                                        <span className="plus">
                                            <img src={greenPlus} alt=""/>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="currency">
                                            LTC
                                        </span>
                                        <span className="value">
                                            + 90.60123
                                        </span>
                                        <span className="plus">
                                            <img src={greenPlus} alt=""/>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="currency">
                                            EOS
                                        </span>
                                        <span className="value">
                                            + 90.60123
                                        </span>
                                        <span className="plus">
                                            <img src={greenPlus} alt=""/>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="currency">
                                            XRP
                                        </span>
                                        <span className="value">
                                            + 90.60123
                                        </span>
                                        <span className="plus">
                                            <img src={greenPlus} alt=""/>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="currency">
                                            BCH
                                        </span>
                                        <span className="value">
                                            + 90.60123
                                        </span>
                                        <span className="plus">
                                            <img src={greenPlus} alt=""/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="claim-btn container">
                        <button className="claim" onClick={()=>window.scrollTo(0,0)}>
                            {languageManager.claim_btn}
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
