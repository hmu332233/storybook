import React from 'react';
import styles from '../styles/styles.scss';
import { connect } from 'react-redux';
import { CountView } from '../components';
import { increment } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.increment(1);
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className={styles.blue}>Hello world!</div>
        <CountView count={this.props.count} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    count: state.exampleReducer.count
  };
};

let mapDispatchToProps = dispatch => {
  return {
    increment: diff => dispatch(increment(diff))
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;