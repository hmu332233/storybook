import React from 'react';
import PropTypes from 'prop-types';

import styles from './RowList.css';

class RowList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rowInterval = this.props.rowInterval === 0 ? 0 : this.props.rowInterval / 2;
    const rowIntervalString = `${rowInterval}rem`;
    const columnIntervalString = `${this.props.columnInterval}rem`;

    const items = this.props.items.map((item, index) => {
      return (
        <div
          key={index}
          className={styles.RowCardList__item}
          style={{
            marginLeft: rowIntervalString,
            marginRight: rowIntervalString,
            marginBottom: columnIntervalString
          }}
        >
          {item}
        </div>
      );
    });

    return (
      <div className={styles.RowList} style={{ marginLeft: `-${rowIntervalString}`, marginRight: `-${rowIntervalString}` }}>
        {items}
      </div>
    );
  }
}

RowList.propTypes = {
  items: PropTypes.array,
  rowInterval: PropTypes.number,
  columnInterval: PropTypes.number
};

RowList.defaultProps = {
  rowInterval: 0,
  columnInterval: 0
};

export default RowList;