const initialState = {
    restaurantData: []
}

const ADD_RESTAURANT_DATA = 'ADD_RESTAURANT_DATA'

export function addRestaurantData(data) {
    return {
        type: ADD_RESTAURANT_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESTAURANT_DATA:
            return Object.assign({}, state, { restaurantData: action.payload.restaurants })

        default:
            return state;
    }
}