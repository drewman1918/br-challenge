import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import './RestaurantList.css'

class RestaurantList extends Component {
  render() {
    let cards = this.props.restaurantData.map((restaurant, i) => {
      return <Card data={restaurant} key={`${i}${restaurant.name}`}/>
    })
    return (
      <div className = 'restaurantList'>
        {cards}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    restaurantData: state.restReducer.restaurantData
  }
}

export default connect(mapStateToProps)(RestaurantList)

