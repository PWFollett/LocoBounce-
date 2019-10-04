import React from 'react';
import './style.css';

export default function Teleport(props) {
    return (
        <div>
            <div class="container">
                <a class="btn btn-default border border-primary text-primary font-weight-bold" href="/">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Return to ToolBelt </a>
            </div>
            
            <iframe id="iWidget" title={props.title} src={props.src}></iframe>
        </div>
    )
}