import React, { Component } from 'react'

//Flags
import nlflag from './header-photos/nl.svg'
import plflag from './header-photos/pl.svg'
import itflag from './header-photos/it.svg'
import gbflag from './header-photos/GB.png'

const Header = (props) => {
    let languageManager = props.languageManager();

    return (
        <header className='Header'>
            <div className="wrapper-flex">
                <div className="logo">

                </div>
                <div className="head-info">
                    <div className="wrap">
                        <img src={itflag} alt=""/>
                        <strong>
                            {languageManager.head_title}
                        </strong>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;