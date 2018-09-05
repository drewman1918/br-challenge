import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList/RestaurantList'
import LargeMap from './components/LargeMap/LargeMap'

const routes = (
    <Switch>
        <Route exact path='/' component={RestaurantList} />
        <Route path='/map' component={LargeMap} />
    </Switch>
)

export default routes