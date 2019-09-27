import React, { Component } from 'react';

export default class Quality extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://teleport.org/assets/firefly/widget-snippet.min.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    <div>
      
    </div>
  }