import React,{Component} from "react";
import Regform from "../../TopSection/Regform/Regform";

//Images
import blueIcon from '../Benefits/images/icon-blue.svg'
import symantec from '../../TopSection/images/symantec.png'
import mcafee from '../../TopSection/images/mcafee.png'
import veriSign from '../../TopSection/images/verisign.png'
import sslTrust from '../../TopSection/images/ssl.png'
import geoTrust from '../../TopSection/images/geotrust.png'
import secure from '../../TopSection/images/secure.svg'
import bluePlus from '../../TopSection/images/plus-blue.svg'
import greenPlus from '../../TopSection/images/plus-green.svg'

export default class Feedback extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let languageManager = this.props.languageManager();
        return(
            <div className="Feedback">
                <div className="container">
                    <div className="image">
                        <img src={blueIcon} alt=""/>
                    </div>
                    <h3 className="section-title">
                        {languageManager.feedback_title}
                    </h3>
                    <div className="green-section">
                        <Regform {...this.props}/>
                    </div>
                    <div className="partners">
                        <img src={symantec} alt=""/>
                        <img src={mcafee} alt=""/>
                        <img src={veriSign} alt=""/>
                        <img src={sslTrust} alt=""/>
                        <img src={geoTrust} alt=""/>
                        <img src={secure} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}