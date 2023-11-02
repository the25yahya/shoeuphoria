import React from 'react'

const Toggle = () => {
  return (
    <div className='toggle'>
    <input type="checkbox" id="checkbox"/>
    <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>
    </div>
  )
}

export default Toggle