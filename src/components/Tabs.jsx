import React from 'react';
import PropTypes from 'prop-types';
import TabNavItem from './TabNavItem.jsx'
import TabContentPane from './TabContentPane.jsx'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.toggle = this.toggle.bind(this);
    this.makeElements = this.makeElements.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  makeElements() {
    return this.props.tabs.reduce((data, tab, index) => {
        const label = (
          <TabNavItem
            text={tab.label}
            active={index === this.state.activeTab}
            onClick={() => {
              this.toggle(index);
            }}
          />
        );
        const content = (
          <TabContentPane 
            tabId={index} 
            content={tab.content} 
          />
        );

        data.labels.push(label);
        data.contents.push(content);

        return data;
      }, {
        labels: [],
        contents: []
      }
    );
  }

  render() {
    const tabs = this.makeElements(this.props.tabs);
    return (
      <div className={`tabs ${this.props.className}`}>
        <Nav tabs className={`justify-content-${this.props.navJustify}`}>
          {tabs.labels}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>{tabs.contents}</TabContent>
      </div>
    );
  }
}

// tmp
const tabs_data = [
  { label: 'Tab 1', content: <div>One</div> },
  { label: 'Tab 2', content: <div>Two</div> },
  { label: 'Tab 3', content: <div>3</div> },
  { label: 'Tab 4', content: <div>4</div> }
];

Tabs.propTypes = {
  tabs: PropTypes.array,
  navJustify: PropTypes.string,
  className: PropTypes.string
};

Tabs.defaultProps = {
  tabs: tabs_data,
  navJustify: 'start', // start, end,, center, between, around
  className: ''
};

export default Tabs;