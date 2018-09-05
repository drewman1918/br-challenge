import React, { Component } from 'react'
import mapIcon from './mapIcon.png'
import axios from 'axios'
import { connect } from 'react-redux'
import { addRestaurantData, removeCard } from './../../ducks/restReducer'
import { Link, withRouter } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  componentDidMount() {
    axios.get('http://s3.amazonaws.com/br-codingexams/restaurants.json')
      .then((res) => {
        this.props.addRestaurantData(res.data)
      })
  }

  removeCard = () => {
    let { selectedCard } = this.props
    selectedCard.style.width = '0px'
    this.props.removeCard()
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
              <div>
                {
                  (this.props.selectedCard) ?
                    <i className="material-icons" id='backIcon' onClick={this.removeCard}>
                      keyboard_arrow_left
                    </i>
                    :
                    null
                }
              </div>
              <h1>Lunch Tyme</h1>
              <Link to='/map'><img src={mapIcon} alt='Map Icon' id='mapIcon' onClick={this.props.removeCard}/></Link>
            </div>
        }


      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedCard: state.restReducer.selectedCard
  }
}

const actions = {
  addRestaurantData,
  removeCard
}

export default withRouter(connect(mapStateToProps, actions)(Header))