import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';


const TabNavItem = props => {
  return (
    <NavItem>
      <NavLink
        className={props.active ? 'active' : ''}
        onClick={() => {
          props.onClick();
        }}
      >
        {props.text}
      </NavLink>
    </NavItem>
  );
};

TabNavItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string
};

TabNavItem.defaultProps = {
  active: false,
  text: ''
};

export default TabNavItem;