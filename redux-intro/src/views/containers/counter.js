import { connect } from 'react-redux';
import { operations as counterOperations } from '../../state/ducks/counter'
import Counter from '../components/counter';

const mapStateToProps = state => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  onDecrement: counterOperations.decrementCount,
  onIncrement: counterOperations.incrementCount,
  onReset: counterOperations.resetCount
};


const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
