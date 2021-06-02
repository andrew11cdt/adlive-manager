import React from 'react';

const DividerStyle = (style) => ({
  borderTop: '1px solid #E6E7E9',
  height: '1px',
  ...style
})
function Divider(props) {
  return <div style={DividerStyle(props.style)}></div>
}

export default Divider;