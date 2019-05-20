import { connect } from 'react-redux';
import Counter from '../components/counter'

const mapStateToProps = state => ({
    count: state.counterState.count
});

const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;