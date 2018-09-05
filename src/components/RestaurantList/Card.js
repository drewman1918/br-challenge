import React, { Component } from 'react'
import Detail from './Detail'
import { connect } from 'react-redux'
import { selectCard } from './../../ducks/restReducer'
import './RestaurantList.css'

class Card extends Component {
    
    slideDetail = () => {
        let cardToSlide = this.refs[`detailCard${this.props.data.name}`]
        cardToSlide.style.width = `100vw`
        this.props.selectCard(cardToSlide)
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

const actions = {
    selectCard
}

export default connect(null, actions)(Card)