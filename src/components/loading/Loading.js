import React from "react";
import gif from './loading.gif';
import './Loading.scss';

class Loading extends React.Component {
    render() {
        return (
            <div className="Loading">
                <img src={gif} alt="loading_gif" />
            </div>
        )
    }
}

export default Loading;