import React from 'react'
import Feature from './Feature';

const Features = ({ features }) => 
    <div className="Price">
        {features.map((feature) => 
            <Feature feature={feature} key={feature.id} />
        )}
    </div>

export default Features