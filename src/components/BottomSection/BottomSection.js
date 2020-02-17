import React, { Component } from 'react'

import logo from '../TopSection/Header/logo.png'

export default class BottomSection extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <section className="BottomSection">
                <div className="container">
                    <div className="wrap">
                        <div className="heading">
                            <img src={logo} alt=""/>
                            <h3 className="blue">{languageManager.footer_title}</h3>
                        </div>
                        <div className="info">
                            <p>
                                {languageManager.footer_info[0]}
                            </p>
                            <p>
                                {languageManager.footer_info[1]}
                            </p>
                            <p>
                                {languageManager.footer_info[2]}
                            </p>
                            <p>
                                {languageManager.footer_info[3]}
                            </p>
                            <p>
                                {languageManager.footer_info[4]}
                            </p>
                            <p>
                                &copy; {new Date().getFullYear()} {languageManager.footer_info[5]}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
