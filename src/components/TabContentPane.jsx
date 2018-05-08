import React from 'react';
import PropTypes from 'prop-types';
import { TabPane } from 'reactstrap';

const TabContentPane = props => {
  return <TabPane tabId={props.tabId}>{props.content}</TabPane>;
};

TabContentPane.propTypes = {
  tabId: PropTypes.number,
  cotent: PropTypes.object,
};

TabContentPane.defaultProps = {
};

export default TabContentPane;