import React from 'react'
import { Link } from 'react-router'

export default () => ({
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/counter">Counter</Link>
            </div>
        )
    },
})
