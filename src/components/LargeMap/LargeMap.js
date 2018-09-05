import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from'react-redux'
import './LargeMap.css'

class LargeMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {}
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker
    })
  }

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  
  render() {
    //define bounds for the google map
    let {restaurantData} = this.props
    let points = restaurantData.map(restaurant => {
      return {
        lat: restaurant.location.lat,
        lng: restaurant.location.lng
      }
    })
    let bounds = new this.props.google.maps.LatLngBounds()
    for (var i = 0; i < points.length; i++){
      bounds.extend(points[i])
    }

    //create markers
    let markers = restaurantData.map(restaurant => {
      const { lat, lng } = restaurant.location
      return (
          <Marker
            name={restaurant.name}
            key={`marker${lat}${lng}`}
            position={{
              lat,
              lng
            }}
          />
      )
    })

    return (
      <div className = 'largeMap'>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: points[0].lat,
            lng: points[0].lng
          }}
          bounds={bounds}
        >
          {markers}
        </Map>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurantData: state.restReducer.restaurantData
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAwyZdeRXN0kA1UqQVu7bGg4DeNiiAavFw')
})(connect(mapStateToProps)(LargeMap))
