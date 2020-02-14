import React, {Component} from "react";

//Images
import iconBlue from './images/icon-blue.svg'
import setting from './images/1.svg'
import trusted_performance from './images/2.svg'
import secure from './images/3.svg'
import coins from './images/coins.svg';


export default class Benefits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
            icons: {
                setting,
                trusted_performance,
                secure
            }
        }
    }

    componentDidMount() {
        let url = "http://ip-api.com/json";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    country: data.country
                });
            })
    }

    render() {
        let languageManager = this.props.languageManager();
        return(
            <section className="Benefits">
                <div className="container">
                    <h3>
                        {languageManager.benefits_title}
                    </h3>
                    <p className="subtitle">
                        {languageManager.benefits_subtitle}
                    </p>
                    <div className="benefits-list">
                        {
                            languageManager.benefits_list.map((item,i)=> {
                                return(
                                    <div className="benefit-item" key={i}>
                                        <div className="wrap">
                                            <div className="image">
                                                <img src={this.state.icons[item.img]} alt=""/>
                                            </div>
                                            <div className="descr">
                                                <h4>
                                                    {item.title}
                                                </h4>
                                                <p>
                                                    {item.description}
                                                </p>
                                                <img src={iconBlue} className="global-logo"/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="coins">
                        <img src={coins} alt=""/>
                    </div>
                    <div className="earned-country">
                        <h3>
                            <span className="green">{languageManager.earned[0]}</span>
                            {languageManager.earned[1]}
                            <span className="green">{this.state.country}</span>
                            {languageManager.earned[2]}
                        </h3>
                    </div>
                </div>
            </section>
        )
    }
};
