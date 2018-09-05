const initialState = {
    restaurantData: [],
    selectedCard: null
}

const ADD_RESTAURANT_DATA = 'ADD_RESTAURANT_DATA'
const SELECT_CARD = 'SELECT_CARD'
const REMOVE_CARD = 'REMOVE_CARD'

export function addRestaurantData(data) {
    return {
        type: ADD_RESTAURANT_DATA,
        payload: data
    }
}

export function selectCard(data) {
    return {
        type: SELECT_CARD,
        payload: data
    }
}

export function removeCard() {
    return {
        type: REMOVE_CARD
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESTAURANT_DATA:
            return Object.assign({}, state, { restaurantData: action.payload.restaurants })

        case SELECT_CARD:
            return Object.assign({}, state, { selectedCard: action.payload })
        
        case REMOVE_CARD:
            return Object.assign({}, state, { selectedCard: null })
        
        default:
            return state;
    }
}