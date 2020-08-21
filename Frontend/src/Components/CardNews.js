import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

import loadingImgSrc from '../Assets/loadingImg.gif'
import ImageContainer from '../Components/ImageComponent';

import Moment from 'react-moment';
import 'moment-timezone';

const CardNews = (props)=>{
    return (
        <section className="news-tile">
            <Card className="make-it-slow">
                <ImageContainer preload={loadingImgSrc} src={props.image} />
                
                <CardBody>
                    <CardTitle className="card-title-text">{props.title}</CardTitle>
                    <CardText className="font-200">
                        <span className="since">
                            <span className="source">{props.source}</span>
                            {' | '}
                            <Moment fromNow>{props.time}</Moment>    
                        </span>
                        <br/>
                        {props.description}
                    </CardText>
                    <div className="text-right">
                        <a href={props.url} rel="noopener noreferrer" target="_blank">Read more</a>
                    </div>
                </CardBody>
            </Card>
        </section>
    );
}

export default CardNews;