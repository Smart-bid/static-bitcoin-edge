import React, {Component} from 'react'
import ReactPlayer from 'react-player'

import btn from './play_btn.png'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            play: false
        }
    }

    handlePlay() {
        this.setState({play: true});
    }

    componentDidMount() {
        document.body.addEventListener("click", this.handlePlay.bind(this));
    }

    render() {
        return (
            <div className="VideoPlayer">
                <ReactPlayer url={this.props.link} playing={this.state.play} controls={true} muted width='100%' height='100%' onClick={this.props.trackVideoPlay}/>
            </div>
        )
    }
}