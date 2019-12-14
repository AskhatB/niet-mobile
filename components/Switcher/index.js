import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Item } from './style';

const Switcher = props => {
  const [active, setActive] = React.useState(0);

  const onTabChange = index => {
    setActive(index);
    props.onTabChange && props.onTabChange(index);
  };

  return (
    <Wrap>
      {props.tabs.map((t, i) => {
        return (
          <Item active={i === active} onClick={() => onTabChange(i)}>
            {t}
          </Item>
        );
      })}
    </Wrap>
  );
};

Switcher.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTabChange: PropTypes.func
};

export default Switcher;
