import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  const { key } = config;
  return (
    <button className={props.classname} onClick={() => selectNextBackground({background: background})}
    data-testid={key}>
      {props.label}
    </button>
  )
}
export default ColourSelector;
