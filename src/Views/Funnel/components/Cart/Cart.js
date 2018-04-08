import React from 'react'

import Name from '../../../components/Name'
import Features from '../../../components/Features'
import Price from '../../../components/Price'

const Cart = ({tariff: {name, price, features}}) => 
<div id="Cart">
    <Name name={name}/>
    <Features features={features} />
    <Price price={price} />
</div>

export default Cart
