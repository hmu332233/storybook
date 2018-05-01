import React from 'react';

class CountView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}

export default CountView;