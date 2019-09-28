import React from 'react'

export default function Teleport(props) {
    return (
        <iframe title={props.title} src={props.src}></iframe>
    )
}