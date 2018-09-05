import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './RestaurantList.css'

class MapContainer extends Component {
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
        const { lat, lng } = this.props.location
        return (
            <Map
                onClick={this.onMapClick}
                google={this.props.google}
                zoom={16}
                initialCenter={{
                    lat,
                    lng
                }}
                style={{
                    height: '180px',
                    width: '100%'
                }}
            >
                
                <Marker
                    name={this.props.name}
                    position={{ lat, lng }}
                    onClick={this.onMarkerClick}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <div className = 'markerToolTip'>
                        <h3>{this.props.name}</h3>
                    </div>
                </InfoWindow>

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAwyZdeRXN0kA1UqQVu7bGg4DeNiiAavFw')
})(MapContainer)
