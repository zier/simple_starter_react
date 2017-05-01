import React from 'react'
import PropTypes from 'prop-types'

export default class Counter extends React.Component {

    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func,
        decrement: PropTypes.func,
    }

    render() {
        const { increment, decrement, count } = this.props
        return (
            <div>
                Current counter value: {count}
                <div><button onClick={() => increment()}>Increment</button></div>
                <div><button onClick={() => decrement()}>Decrement</button></div>
            </div>
        )
    }
}
