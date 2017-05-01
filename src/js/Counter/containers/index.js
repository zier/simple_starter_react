import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import CounterComponent from '../components'

function mapStateToProps(state) {
    return {
        count: state.counterReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
