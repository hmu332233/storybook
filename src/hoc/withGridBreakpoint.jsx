import React from 'react';

function injectGridBreakpoint(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        breakpoint: 'sm'
      };
      this.breakpoint = {
        md: 768,
        lg: 992,
        xl: 1200
      };
      this.resizeHandler = this.resizeHandler.bind(this);
    }
    componentDidMount() {
      window.addEventListener('resize', this.resizeHandler);
      this.resizeHandler();
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeHandler);
    }
    resizeHandler() {
      if (window.innerWidth < this.breakpoint.md && this.state.breakpoint !== 'sm') {
        this.setState({
          breakpoint: 'sm'
        });
      } else if (
        window.innerWidth >= this.breakpoint.md &&
        window.innerWidth < this.breakpoint.lg &&
        this.state.breakpoint !== 'md'
      ) {
        this.setState({
          breakpoint: 'md'
        });
      } else if (
        window.innerWidth >= this.breakpoint.lg &&
        window.innerWidth < this.breakpoint.xl &&
        this.state.breakpoint !== 'lg'
      ) {
        this.setState({
          breakpoint: 'lg'
        });
      } else if (window.innerWidth >= this.breakpoint.xl && this.state.breakpoint !== 'xl') {
        this.setState({
          breakpoint: 'xl'
        });
      }
    }
    render() {
      return <Component {...this.props} breakpoint={this.state.breakpoint} />;
    }
  };
}