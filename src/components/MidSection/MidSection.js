import React, { Component } from 'react'

//Components
import Regform from '../TopSection/Regform/Regform'
import Benefits from "./Benefits/Benefits";
import FBreviews from "./FBreviews/FBreviews";

//Images
import uaFlag from './images/ua.svg'

import jonathan from './images/jonathan.jpg'
import delilah from './images/delilah.jpg'
import simon from './images/simon.jpg'
import lewis from './images/lewis.jpg'
import georgina from './images/georgina.jpg'
import owen from './images/owen.jpg'

import postImg from './images/exchanges.png'

import formLogo from '../TopSection/images/ice-logo.svg'

export default class MidSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: {
                jonathan,
                delilah,
                simon,
                lewis,
                georgina,
                owen
            }
        }
    }
    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="MidSection">

                <section className="beginners">
                    <div className="container">
                        <h3>
                            {languageManager.beginners_title}
                        </h3>
                        <p className="subtitle">
                            {languageManager.beginners_subtitle}
                        </p>
                    </div>
                    <div className="beginners-bg">
                        <div className="beginners-list container">
                            {
                                languageManager.beginners_list.slice(0,3).map((item,i)=>{
                                    return(
                                        <div className="beginner-item" key={i}>
                                            <div className="image">
                                                <img src={this.state.images[item.img]} alt=""/>
                                            </div>
                                            <div className="descr">
                                                <h4>{item.name}</h4>
                                                <p>
                                                    {item.info}
                                                </p>
                                                <div className="earn">
                                                    <img src={uaFlag} alt=""/>
                                                    <span className="amount">{item.earn}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="beginner-item regfrom">
                                <div className="form-logo">
                                    <img src={formLogo} alt=""/>
                                    <span>{languageManager.immediate_earnings}</span>
                                </div>
                                <Regform {...this.props}/>
                            </div>
                        </div>
                    </div>
                </section>

                <Benefits {...this.props}/>

                <section className="post">
                    <div className="container">
                        <div className="wrapper-flex">
                            <div className="image">
                                <img src={postImg} alt=""/>
                            </div>
                            <div className="description">
                                <h3>
                                    {languageManager.post_title}
                                </h3>
                                <p>
                                    {languageManager.post_description}
                                </p>
                                <div className="date">
                                    <span>
                                        {languageManager.date}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="beginners">
                    <div className="beginners-bg">
                        <div className="beginners-list container">
                            {
                                languageManager.beginners_list.slice(3,6).map((item,i)=>{
                                    return(
                                        <div className="beginner-item" key={i}>
                                            <div className="image">
                                                <img src={this.state.images[item.img]} alt=""/>
                                            </div>
                                            <div className="descr">
                                                <h4>{item.name}</h4>
                                                <p>
                                                    {item.info}
                                                </p>
                                                <div className="earn">
                                                    <img src={uaFlag} alt=""/>
                                                    <span className="amount">{item.earn}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="beginner-item regfrom">
                                <div className="form-logo">
                                    <img src={formLogo} alt=""/>
                                    <span>{languageManager.immediate_earnings}</span>
                                </div>
                                <Regform {...this.props}/>
                            </div>
                        </div>
                    </div>
                </section>

                <FBreviews {...this.props}/>

            </div>

        )
    }
}
