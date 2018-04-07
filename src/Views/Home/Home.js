import React from 'react'

const Home = ({changeView, tariffs, selectTariff}) => 
    <div>
        <p>home</p>
        <p>{tariffs.length}</p>
        <div onClick={()=>selectTariff(2)}>To funnel</div>
    </div>

export default Home