import React, {Component} from "react"
import moment from 'moment'

//Images
import facebookLogo from './images/facebook.png'
import joanne from './images/joanne.jpg'
import rudy from './images/rudy.jpg'
import clark from './images/clark.jpg'
import steven from './images/steven.jpg'

export default class FBreviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joanne,
            rudy,
            clark,
            steven
        }
    }

    today = new Date();

    render() {
        let languageManager = this.props.languageManager();
        return(
            <section className="fb-reviews">
                <div className="container">
                    <div className="heading">
                        <div className="image">
                            <img src={facebookLogo} alt=""/>
                        </div>
                        <div className="curr-date">
                            {moment(this.today).format("DD/MM/YYYY")}
                        </div>
                    </div>
                    <div className="reviews-list">
                        {
                            languageManager.fb_reviews.map((item,i)=>{
                                return(
                                    <div className="review-item" key={i}>
                                        <div className="flex">
                                            <div className="image">
                                                <img src={this.state[item.img]} alt=""/>
                                            </div>
                                            <div className="description">
                                                <h4>{item.name}</h4>
                                                <p>{item.info}</p>
                                                <span>{item.like}</span>
                                                <span>{item.comment}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}