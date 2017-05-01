import * as types from '../actions'

export default (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return state + 1
        case types.DECREMENT:
            return state - 1
        default:
            return state
    }
}
