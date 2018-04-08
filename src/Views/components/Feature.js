import React from 'react'

const Feature = ({feature: {type, value, units}}) => 
    <div className="Feature">
        <p>{type}</p>
        <p className="value">{value}<small>{units}</small></p>
    </div>

export default Feature
