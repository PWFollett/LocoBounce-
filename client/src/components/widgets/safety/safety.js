import React, { Component } from 'react';
import "../safety/style.css"
export default class Safety extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.setTimeout(() => {
            const script = document.createElement("script");
            script.src = "https://teleport.org/assets/firefly/widget-snippet.min.js";
            script.async = true;
            script.setAttribute('class', 'teleport-widget-script');
            script.dataset.url = "https://teleport.org/cities/aarhus/widget/crime/?currency=USD";
            document.body.appendChild(script);
        }, 0)
    }
    render() {
        return (
            <a className="teleport-widget-link" href="https://teleport.org/cities/philadelphia/"></a>
        )
    }
}