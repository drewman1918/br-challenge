import React, { Component } from 'react'
import Detail from './Detail'
import './RestaurantList.css'

export default class Card extends Component {
    
    slideDetail = () => {
        let cardToSlide = this.refs[`detailCard${this.props.data.name}`]
        let currentHeight = cardToSlide.clientHeight
        let realHeight = cardToSlide.scrollHeight

        if (currentHeight === realHeight) {
            cardToSlide.style.height = '0px'
        } else {
            cardToSlide.style.height = `${realHeight}px`
        }
    }
    
    render() {
        const { data } = this.props
    return (
        <div className = 'cardContainer'>
            <div className='restaurantCard' onClick={this.slideDetail}>
                <img src={data.backgroundImageURL} className='cardImage' alt = 'Restaurant Hero'/>
                <div className="cardTitle">
                    <h2>{data.name}</h2>
                    <h4>{data.category}</h4>
                </div>
            </div>
            
            <div className='detailCard' ref={`detailCard${data.name}`}>
                <Detail data={data}/>
            </div>
        </div>
    )
  }
}
