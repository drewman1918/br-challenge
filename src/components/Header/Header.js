import React, { Component } from 'react'
import mapIcon from './mapIcon.png'
import axios from 'axios'
import { connect } from 'react-redux'
import { addRestaurantData } from './../../ducks/restReducer'
import { Link, withRouter } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  componentDidMount() {
    axios.get('http://s3.amazonaws.com/br-codingexams/restaurants.json')
      .then((res) => {
        this.props.addRestaurantData(res.data)
      })
  }
  
  render() {
    return (
      <div className = 'header'>
        {
          (this.props.location.pathname === '/map') ?
            <div className="content">
              <div>{null}</div>
              <h1>Lunch Tyme</h1>
              <Link to='/'><i className="material-icons">list</i></Link>
            </div>
            :
            <div className="content">
              <div>{null}</div>
              <h1>Lunch Tyme</h1>
              <Link to='/map'><img src={mapIcon} alt='Map Icon' id='mapIcon' /></Link>
            </div>
        }


      </div>
    )
  }
}

const actions = {
  addRestaurantData
}

export default withRouter(connect(null, actions)(Header))