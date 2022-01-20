import React from 'react';
const Display = (props) => {
  console.log(props)
    return (
      <p>{props.content} {props.number}</p>
    )
}
export default Display;
