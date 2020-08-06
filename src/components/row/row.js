// react import
import React from 'react'
import { Link } from "react-router-dom"

// row function
function Row(props) {
    return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
  }
  

// react export
export default Row