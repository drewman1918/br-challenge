import React, { Component, Fragment } from 'react'
import SmallMap from './smallMap'
import './RestaurantList.css'

export default class Detail extends Component {
    render() {
        const { data } = this.props
    return (
        <div > 
            <div className="smallMapContainer">
                <SmallMap location={data.location} name={data.name}/>
            </div>

            <div className="detailTitle">
                <h2>{data.name}</h2>
                <h4>{data.category}</h4>
            </div>

            <div className="cardDetails">
                <p>{data.location.address} < br /> {data.location.formattedAddress[1]}</p>
                {
                    (data.contact) ?
                        <Fragment>
                            <p>{(data.contact.formattedPhone) ? data.contact.formattedPhone : null}</p>
                            <p>{(data.contact.twitter) ? `@${data.contact.twitter}` : null}</p>
                        </Fragment>
                        :
                        null
                }
            </div>
        </div>
    )
  }
}
