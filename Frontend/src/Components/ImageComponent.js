import React from 'react'
import ProgressiveImage from 'react-progressive-image'
 
export default function ImageComponent(props) {
  return (
    <ProgressiveImage
    src={props.src}
    placeholder={props.preload}
    >
        {src => <img src={src} className="card-image" alt="an image" />}
    </ProgressiveImage>
  )
}