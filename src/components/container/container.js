// react import
import React from 'react'
import { Link } from "react-router-dom"

// container function
function Container(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
  }

// react export
export default Container